module.exports = function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json({
    status: 'OPERATIONAL',
    message: 'Iraq Election Platform - LIVE',
    timestamp: new Date().toISOString(),
    version: '2.0.0',
    platform: 'Vercel'
  });
}
