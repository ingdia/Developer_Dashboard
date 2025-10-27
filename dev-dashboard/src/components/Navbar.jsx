import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between p-10'>
      <div className='text-4xl font-bold'>
        Developer Dashboard
      </div>
      <button className="bg-amber-700 p-3 rounded-4xl hover:bg-white hover:border-2 hover:border-amber-700 hover:text-amber-600 text-white font-bold">
        <p>Light/Black</p>
      </button>
    </div>
  )
}

export default Navbar
