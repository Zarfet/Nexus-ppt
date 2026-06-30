export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/javascript');
  res.status(200).send(
    'window.__PUSHER_KEY__ = ' + JSON.stringify(process.env.PUSHER_KEY || '') + ';\n' +
    'window.__PUSHER_CLUSTER__ = ' + JSON.stringify(process.env.PUSHER_CLUSTER || '') + ';\n'
  );
}
