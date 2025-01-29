import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    const newTab = window.open('/Reesav.pdf', '_blank')
    if (!newTab) {
      window.location.href = '/Reesav.pdf'
    }
  }, [])

  return <div className="text-gray-400">Opening my resume ...</div>
}
