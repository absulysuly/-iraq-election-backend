const candidates = [
  { id: 1, name: "Ahmed Al-Maliki", party: "National Coalition", governorate: "Baghdad", votes: 1542 },
  { id: 2, name: "Fatima Al-Hashemi", party: "Democratic Alliance", governorate: "Basra", votes: 1287 },
  { id: 3, name: "Omar Al-Sadr", party: "Reform Movement", governorate: "Najaf", votes: 934 },
  { id: 4, name: "Sara Al-Khafaji", party: "Unity Party", governorate: "Karbala", votes: 1765 }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method === 'GET') {
    return res.status(200).json(candidates);
  }

  if (req.method === 'POST') {
    try {
      const { candidateId } = req.body;
      const candidate = candidates.find(c => c.id === candidateId);
      if (candidate) {
        candidate.votes += 1;
        return res.status(200).json({
          success: true,
          votes: candidate.votes,
          candidate: candidate.name,
          message: 'Vote recorded successfully'
        });
      }
      return res.status(404).json({ success: false, error: 'Candidate not found' });
    } catch (error) {
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }

  return res.status(405).json({ success: false, error: 'Method not allowed' });
}
