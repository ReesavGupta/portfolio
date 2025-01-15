export const Nav = () => {
  return (
    <div>
      <pre className="text-[#58A6FF] font-extrabold">
        {`
  _____                                      
 |  __ \\                                     
 | |__) |  ___   ___  ___   __ _  __  __
 |  _  /  / _ \\ / _ \\/ __| / _\` |\\ \\ / /
 | | \\ \\ |  __/|  __/\\__ \\| (_| | \\ V / 
 |_|  \\_\\ \\___| \\___||___/ \\__,_|  \\_/  
                                             
      `}
      </pre>
      <div className="text-gray-300 font-normal">
        <p>Welcome to my portfolio!</p>
        <p>Type help to get a list of available commands.</p>

        <p>Use ↑ and ↓ to navigate command history.</p>
      </div>
    </div>
  )
}
