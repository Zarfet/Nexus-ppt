import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }
  const { slide } = req.body;
  if (typeof slide !== 'number') {
    res.status(400).json({ error: 'slide must be a number' });
    return;
  }
  await pusher.trigger('nexus', 'slide-change', { slide });
  res.status(200).json({ ok: true });
}
