import { useInput } from '@/store/inputStore'
import { useState, useRef, useEffect } from 'react'
import { commandComponents } from '@/app/constants'

export const TextBox = () => {
  const { input, update, clear } = useInput()
  const inputRef = useRef<HTMLInputElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState(0)
  const [output, setOutput] = useState<{ command: string }[]>([])
  const [suggestedCommand, setSuggestedCommand] = useState<string | null>(null)

  useEffect(() => {
    updateCursorPosition()
  }, [input])

  useEffect(() => {
    const handleGlobalKeyDown = () => {
      if (inputRef.current) {
        inputRef.current.focus()
      }
    }

    window.addEventListener('keydown', handleGlobalKeyDown)

    return () => {
      window.removeEventListener('keydown', handleGlobalKeyDown)
    }
  }, [])

  const updateCursorPosition = () => {
    if (inputRef.current && cursorRef.current) {
      const input = inputRef.current
      const cursor = cursorRef.current
      const caretIndex = input.selectionStart || 0

      const tempSpan = document.createElement('span')
      tempSpan.innerText = input.value.substring(0, caretIndex) || ' '
      tempSpan.style.visibility = 'hidden'
      tempSpan.style.whiteSpace = 'pre'
      tempSpan.style.fontFamily = 'monospace'
      tempSpan.style.fontSize = getComputedStyle(input).fontSize
      document.body.appendChild(tempSpan)

      const textWidth = tempSpan.offsetWidth
      setCursorPosition(textWidth)

      document.body.removeChild(tempSpan)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    update(value)

    if (value.trim()) {
      const matchingCommand = Object.keys(commandComponents).find((cmd) =>
        cmd.startsWith(value.trim())
      )
      setSuggestedCommand(matchingCommand || null)
    } else {
      setSuggestedCommand(null)
    }

    updateCursorPosition()
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab' && suggestedCommand) {
      e.preventDefault()
      update(suggestedCommand)
      setSuggestedCommand(null)

      setTimeout(() => {
        if (inputRef.current) {
          const length = suggestedCommand.length
          inputRef.current.setSelectionRange(length, length)
        }
        updateCursorPosition()
      }, 0)
    }
    updateCursorPosition()
  }

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const command = input.trim()
    if (command === 'clear') {
      setOutput([])
      clear()
      return
    }

    setOutput((prevOutput) => [...prevOutput, { command }])
    update('')
    setSuggestedCommand(null)
    setCursorPosition(0)
  }

  return (
    <div>
      <div className="w-[46rem] m-auto mt-1 p-4 bg-[#0D1117] text-white font-mono">
        {output.map(({ command }, index) => {
          const CommandComponent = commandComponents[command]
          return (
            <div
              key={index}
              className="mb-2"
            >
              <p>
                <span className="text-teal-500 font-extrabold">
                  visitor@reesav~$
                </span>{' '}
                <span className="text-white">{command}</span>
              </p>
              {CommandComponent ? (
                <div className="ml-7 mt-1">
                  <CommandComponent />
                </div>
              ) : (
                <p className="text-gray-300">
                  "{command}" is not a recognized command.
                </p>
              )}
            </div>
          )
        })}
        <div className="flex">
          <p className="text-teal-500 font-extrabold inline mr-1">
            visitor@reesav~$
          </p>
          <div className="relative w-full inline-block">
            <form onSubmit={handleOnSubmit}>
              <input
                ref={inputRef}
                className="w-full bg-transparent text-white outline-none border-none caret-transparent"
                type="text"
                value={input}
                onChange={handleInputChange}
                onKeyDown={handleKeyUp}
                autoFocus
              />
            </form>
            {suggestedCommand && (
              <div
                className="absolute top-0 left-0 text-gray-500 pointer-events-none"
                style={{ transform: `translateX(${cursorPosition}px)` }}
              >
                {suggestedCommand.slice(input.length)}
              </div>
            )}
            <div
              ref={cursorRef}
              className="absolute top-0 left-0 h-6 w-[10px] bg-white animate-blink"
              style={{ transform: `translateX(${cursorPosition}px)` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
