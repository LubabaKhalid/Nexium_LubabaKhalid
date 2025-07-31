import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [resume, setResume] = useState('')
  const [job, setJob] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    try {
      const response = await axios.post('/api/ai', {
        resume,
        job
      })
      setResult(response.data.result)
    } catch (err) {
      setResult('Something went wrong. Try again.')
    }
    setLoading(false)
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Resume Tailor</h1>

      <textarea
        className="w-full border p-2 mb-4"
        placeholder="Paste your resume here..."
        rows={6}
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <textarea
        className="w-full border p-2 mb-4"
        placeholder="Paste job description here..."
        rows={6}
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Tailoring...' : 'Tailor Resume'}
      </button>

      <div className="mt-6">
        <h2 className="font-semibold text-lg mb-2">Tailored Resume:</h2>
        <pre className="bg-gray-100 p-4 whitespace-pre-wrap border rounded">{result}</pre>
      </div>
    </div>
  )
}
