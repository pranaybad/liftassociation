import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FcAbout } from 'react-icons/Fc';
import { AiFillContacts } from 'react-icons/Ai';
import { MdOutlineMiscellaneousServices } from 'react-icons/md';
import { AiOutlineLogin } from 'react-icons/ai';
import { SiGnuprivacyguard } from 'react-icons/si';
// FcAbout
// AiFillContacts
// MdOutlineMiscellaneousServices
// AiOutlineLogin
// SiGnuprivacyguard


const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Link href={"/"}>
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <Image src="/logo.svg" alt="" width={200} height={40}/>
        
      </a>
      </Link>
  
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center font-bold shadow-md">
      <Link href={'/about'}><a className="mr-5 hover:text-gray-900"><FcAbout className='text-4xl'/></a></Link>
      <Link href={'/service'}><a className="mr-5 hover:text-gray-900"><MdOutlineMiscellaneousServices className='text-4xl'/></a></Link>
      <Link href={'/login'}><a className="mr-5 hover:text-gray-900"><AiOutlineLogin className='text-4xl'/></a></Link>
      <Link href={'/signup'}><a className="mr-5 hover:text-gray-900"><SiGnuprivacyguard className='text-4xl'/></a></Link>
      <Link href={'/contact'}><a className="mr-5 hover:text-gray-900"><AiFillContacts className='text-4xl'/></a></Link>
      
    </nav>
    {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button> */}
  </div>
</header>
    </div>
  )
}

export default Navbar