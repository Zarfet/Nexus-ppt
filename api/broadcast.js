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
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const slide = req.body && req.body.slide;
  if (typeof slide !== 'number') {
    res.status(400).json({ error: 'Missing or invalid "slide" (expected number)' });
    return;
  }

  try {
    await pusher.trigger('nexus', 'slide-change', { slide });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'Broadcast failed' });
  }
}
