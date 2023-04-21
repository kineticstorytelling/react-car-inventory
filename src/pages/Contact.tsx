import React from 'react'

const Contact = () => {
  return (
    <div 
    className="bg-black flex">
      <div className='w-2/5 p-8 m-8'>
      <h2 className="text-white p-3 text-6xl font-semibold">Contact</h2>
      <p className="text-white text-3xl p-3">Let's Connect</p>
      <button className='bg-white m-3 px-5 py-4 text-xl rounded hover:bg-gray-700 hover:text-white'>Contact</button>
      </div>
      <img className="w-2/5 mx-15" src="/src/assets/images/cars2.jpg" alt="Car driving in sunset" />
    </div>
  )
}

export default Contact