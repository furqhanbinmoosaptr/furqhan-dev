import React from 'react'

const Footer = () => {
  return (
    <footer className='dev_container pt-[11rem] pb-[5rem]'>
<div className="devider w-full h-[1px] bg-[rgb(68,68,68)]"></div>

<div className='flex gap-52 mt-8'>
    <ul className='flex flex-col gap-5'>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Home</li>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>About</li>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Blog</li>
     
    </ul>
    <ul className='flex flex-col gap-5'>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Instagram</li>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Linkedin</li>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Github</li>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>X - Twitter</li>     
    </ul>

    <ul className='flex flex-col gap-5'>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Code </li>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Life</li>
        <li className='text-[#60a5fa] hover:text-[#444444] cursor-pointer text-[1rem]'>Blog</li>
    </ul>
</div>
    </footer>
  )
}

export default Footer