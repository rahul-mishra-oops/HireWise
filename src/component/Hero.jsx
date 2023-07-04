import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white max-w-[800px] mt-[-96] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>HIRE WITH EASE</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Hire Wisely, Hire Easily</h1>
      <div className='flex justify-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold '>Fast, reliable hiring for  </p>
        <Typed className='md:text-5xl sm:text-4xl text-xl font-bold pl-4 text-gray-700'
          strings={[
            'FIRMS',
            'COMPANY',
            'STARTUP'
          ]}
          typeSpeed={100}
          backSpeed={110}
          loop />
        

      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-500 pt-5 '>Monitor your hiring process to recruit talanted individuals</p>

      <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
    </div>
  )
}

export default Hero