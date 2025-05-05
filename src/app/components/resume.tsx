import { useEffect } from 'react'

export default function Resume() {
  useEffect(() => {
    const newTab = window.open(
      'https://drive.google.com/file/d/1e1qn8OIKgBRqZisJTKDLmja4jr74qwPy/view?usp=drive_link',
      '_blank'
    )
  }, [])

  return <div className="text-gray-400">Opening my resume ...</div>
}
  