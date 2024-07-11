import React from 'react'

const Home = () => {
  return (
   <section className="dev_container sm:flex-col flex">
    {/* left */}
    <div className='flex w-[80%] flex-col'>
<span className='text-[#fb7185] relative top-4 text-[1.1rem]'>Hi, my name is</span>
<div>
<span className='text-white font-bold text-[3rem]  flex flex-col'>Furqhan Bin Moosa</span>
<span className='text-white'>Web Developer and Digital Marketer</span>
</div>

<div className='mt-4'>
    <span className='text-[#444444] text-[1.2rem]'>Currently working at The University of Adelaide, MPL Enteprises (Worldle, WhereTaken etc) and chipping away at these projects.</span>
</div>

<img className='mt-8 rounded-lg w-[89%] mt-[4rem]' src="Images/smug.webp" alt="" />
    </div>


    {/* right */}
    <div className='20%'>

<div className='w-[8rem] h-[8rem] overflow-hidden relative top-6'>

<img src="Images/Logo.png" className='w-[100%] h-[100%] rounded-full'  alt="" />
</div>
    </div>
   </section>
  )
}

export default Home