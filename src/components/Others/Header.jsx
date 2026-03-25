import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Welcome Back, <br /> <span className='text-blue-400 text-3xl font-bold'> Huzaifa Ameer </span></h1>
        <button className='px-3 py-2 bg-purple-500 text-white rounded-md cursor-pointer active:scale-95 text-sm'>Logout</button>
    </div>
  )
}

export default Header