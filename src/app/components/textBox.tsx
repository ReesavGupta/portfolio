'use client'
import { useState, useRef, useEffect } from 'react'

export const TextBox = () => {
  const [inputValue, setInputValue] = useState('') // Track input text
  const inputRef = useRef<HTMLInputElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState(0)

  useEffect(() => {
    updateCursorPosition()
  }, [])

  // Function to update cursor position
  const updateCursorPosition = () => {
    if (inputRef.current && cursorRef.current) {
      const input = inputRef.current
      const cursor = cursorRef.current
      const caretIndex = input.selectionStart || 0

      // Create a temporary span to measure text width
      const tempSpan = document.createElement('span')
      tempSpan.innerText = input.value.substring(0, caretIndex) || ' '
      tempSpan.style.visibility = 'hidden'
      tempSpan.style.whiteSpace = 'pre'
      tempSpan.style.fontFamily = 'monospace'
      tempSpan.style.fontSize = getComputedStyle(input).fontSize
      document.body.appendChild(tempSpan)

      // Calculate cursor X position
      const textWidth = tempSpan.offsetWidth
      setCursorPosition(textWidth)

      // Clean up
      document.body.removeChild(tempSpan)
    }
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    updateCursorPosition()
  }

  // Handle key presses (Arrow keys, Backspace, etc.)
  const handleKeyUp = () => {
    updateCursorPosition()
  }

  return (
    <div className="w-[46rem]  m-auto mt-10  p-4 bg-[#0D1117] text-white font-mono flex ">
      <p className="text-teal-500 font-extrabold inline mr-1">
        visitor@reesav~$
      </p>
      <div className="relative w-full inline-block ">
        <input
          ref={inputRef}
          className="w-full bg-transparent text-white outline-none border-none caret-transparent"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          autoFocus
        />
        {/* Moving Cursor */}
        <div
          ref={cursorRef}
          className="absolute top-0 left-0 h-6 w-[10px] bg-white animate-blink"
          style={{ transform: `translateX(${cursorPosition}px)` }}
        ></div>
      </div>
    </div>
  )
}
