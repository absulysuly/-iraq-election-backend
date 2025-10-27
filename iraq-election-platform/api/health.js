export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  return res.status(200).json({
    status: 'OPERATIONAL',
    message: 'Iraq Election Platform API',
    timestamp: new Date().toISOString(),
    platform: 'Vercel',
    version: '1.0.0'
  });
}
