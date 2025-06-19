import React from 'react'

function loading() {
  return (
    <div className='absolute top-0 left-0 h-screen w-screen flex justify-center items-center z-[12000] bg-blue-950'>

      <span className="loader" ></span>
      
    </div>
  )
}

export default loading