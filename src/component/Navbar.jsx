import React  , {useState} from 'react'
import {AiOutlineClose , AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav , setNav] = useState(true);
    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <div className='text-white flex justify-between items-center h-24 mx-auto max-w-[1240px] px-4'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>HireWise.</h1>
        <ul className='md:flex hidden '>
            <li className='p-4 cursor-pointer hover:uppercase'>Home</li>
            <li className='p-4 cursor-pointer hover:uppercase'>Company</li>
            <li className='p-4 cursor-pointer hover:uppercase'>Resources</li>
            <li className='p-4 cursor-pointer hover:uppercase'>About</li>
            <li className='p-4 cursor-pointer hover:uppercase'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed  left-[-100%] ease-in-out duration-500'}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <ul className='uppercase p-4' >
            <li className='p-4 border-b border-gray-600 hover:lowercase cursor-pointer'>Home</li>
            <li className='p-4 border-b border-gray-600 hover:lowercase cursor-pointer'>Company</li>
            <li className='p-4 border-b border-gray-600 hover:lowercase cursor-pointer'>Resources</li>
            <li className='p-4 border-b border-gray-600 hover:lowercase cursor-pointer'>About</li>
            <li className='p-4 border-b border-gray-600 hover:lowercase cursor-pointer'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar