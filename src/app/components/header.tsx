import React from 'react'

export const Header = () => {
  return (
    <div className=" text-gray-400 ">
      <p>Welcome to my portfolio!</p>
      <p>
        Type <span className=" text-orange-300">help</span> to get a list of
        available commands.
      </p>

      <p>
        Use <span className=" text-orange-300">tab</span>
        <span className=" text-orange-300"> </span> for autocompletion of
        command
      </p>
    </div>
  )
}
