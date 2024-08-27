import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Icons'
import { ArrowButton } from "./Buttons"

const Navbar = () => {
  return (
    <nav className='w-full flex flex-row items-center justify-between bg-white text-xs shadow-sm rounded-xl p-3'>
      <Link href={`#`} className=''>
        <Logo className='scale-75' width={'200'} height={50}/>
      </Link>

      <ul className='flex flex-row items-center justify-center gap-12 text-gray-700'>
        <Link href={`#`} className=''>
          <li>Home</li>
        </Link>

        <Link href={`#`} className=''>
          <li>Our products</li>
        </Link>

        <Link href={`#`} className=''>
          <li>Consulting</li>
        </Link>
      </ul>
      
      <ArrowButton type='right' className='w-[120px] h-[55px]'>
        <span>Delegate</span>
      </ArrowButton>

    </nav>
  )
}

export default Navbar