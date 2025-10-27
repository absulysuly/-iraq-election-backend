module.exports = (req, res) => {
  res.status(200).json({
    status: 'OPERATIONAL',
    message: 'Iraq Election Platform API',
    timestamp: new Date().toISOString(),
    platform: 'Vercel'
  });
};
