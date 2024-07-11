import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const Header = () => {
  return (
    <div className='dev_container h-[6rem] justify-between items-center flex' >
<ul className='flex gap-7 items-center'>
    <li className='text-[#444444] hover:text-white font-bold text-[1.1rem]'>Home</li>
    <li className='text-[#444444] hover:text-white font-bold text-[1.1rem]'>About</li>
    <li className='text-[#444444] hover:text-white font-bold text-[1.1rem]'>Blog</li>
    <li className='text-[#444444]  font-bold text-[1.1rem]'>Projects</li>
    <li className="text-[1.1rem] font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
      Projects
    </li>
</ul>

<button className='w-[2rem] rounded-md hover:border border-white h-[2rem] bg-[#444444] flex items-center justify-center'><FaMoon/></button>
    </div>
  )
}

export default Header