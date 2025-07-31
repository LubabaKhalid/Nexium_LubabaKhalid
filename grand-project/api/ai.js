import axios from 'axios'

export default async function handler(req, res) {
  const { resume, job } = req.body
  try {
    const response = await axios.post('http://localhost:5678/webhook-test/resume-tailor', {
      resume,
      job
    })
    res.status(200).json({ result: response.data })
  } catch (err) {
    res.status(500).json({ error: 'Failed to tailor resume', details: err.message })
  }
}
