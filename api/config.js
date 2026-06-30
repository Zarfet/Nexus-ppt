export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.end(`window.__PUSHER_KEY__=${JSON.stringify(process.env.PUSHER_KEY||'')};window.__PUSHER_CLUSTER__=${JSON.stringify(process.env.PUSHER_CLUSTER||'eu')};`);
}
