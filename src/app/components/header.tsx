import React from 'react'

export const Header = () => {
  return (
    <div className=" text-gray-300 font-normal">
      <p>Welcome to my portfolio!</p>
      <p>
        Type <span className="text-orange-500">help</span> to get a list of
        available commands.
      </p>

      <p>
        Use <span className="text-orange-500">↑</span> and{' '}
        <span className="text-orange-500">↓</span> to navigate command history.
      </p>
    </div>
  )
}
