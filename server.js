import http from 'http';
import fs from 'fs';
import path from 'path';
import { networkInterfaces } from 'os';
import Pusher from 'pusher';

const PORT = 7788;
const DIR = import.meta.dirname;

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.pdf': 'application/pdf',
};

const pusherKey = process.env.PUSHER_KEY || '';
const pusherCluster = process.env.PUSHER_CLUSTER || 'eu';

const pusher = process.env.PUSHER_APP_ID ? new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: pusherKey,
  secret: process.env.PUSHER_SECRET,
  cluster: pusherCluster,
  useTLS: true,
}) : null;

// Inject PUSHER_KEY and PUSHER_CLUSTER into index.html at runtime
function injectConfig(html) {
  const snippet = `<script>window.__PUSHER_KEY__="${pusherKey}";window.__PUSHER_CLUSTER__="${pusherCluster}";</script>`;
  return html.replace('<script type="application/json" id="speaker-notes">', snippet + '\n<script type="application/json" id="speaker-notes">');
}

const server = http.createServer(async (req, res) => {
  const [urlPath, query] = req.url.split('?');

  // Handle /api/broadcast
  if (urlPath === '/api/broadcast' && req.method === 'POST') {
    let body = '';
    req.on('data', d => body += d);
    req.on('end', async () => {
      try {
        const { slide } = JSON.parse(body);
        if (pusher) await pusher.trigger('nexus', 'slide-change', { slide });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: true }));
      } catch(e) {
        res.writeHead(500); res.end('error');
      }
    });
    return;
  }

  const filePath = path.join(DIR, urlPath === '/' ? 'index.html' : urlPath);
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    let content = data;
    if (ext === '.html') content = injectConfig(data.toString());
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(content);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  const nets = networkInterfaces();
  let localIP = 'localhost';
  for (const ifaces of Object.values(nets)) {
    for (const iface of ifaces) {
      if (iface.family === 'IPv4' && !iface.internal) { localIP = iface.address; break; }
    }
    if (localIP !== 'localhost') break;
  }
  console.log(`\nPresentation: http://localhost:${PORT}`);
  console.log(`Phone notes:  http://${localIP}:${PORT}/?notes\n`);
  if (!pusher) console.log('⚠️  PUSHER_* env vars not set — set them to enable phone sync\n');
});
