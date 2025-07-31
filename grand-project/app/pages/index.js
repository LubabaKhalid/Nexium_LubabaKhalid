import { useState } from 'react'
import axios from 'axios'

export default function Home() {
  const [resume, setResume] = useState('')
  const [job, setJob] = useState('')
  const [output, setOutput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    const res = await axios.post('/api/ai', { resume, job })
    setOutput(res.data.result)
    setLoading(false)
  }

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Resume Tailor</h1>
      <textarea
        className="w-full border p-2 mb-2"
        rows={6}
        placeholder="Paste your resume"
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />
      <textarea
        className="w-full border p-2 mb-2"
        rows={6}
        placeholder="Paste job description"
        value={job}
        onChange={(e) => setJob(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? 'Tailoring...' : 'Tailor Resume'}
      </button>
      <h2 className="mt-4 font-semibold">Result:</h2>
      <pre className="bg-gray-100 p-2 whitespace-pre-wrap">{output}</pre>
    </div>
  )
}
