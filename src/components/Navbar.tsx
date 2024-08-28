import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Icons'
import { ArrowButton } from "./Buttons"

const Navbar = () => {
  return (
    <nav className='fixed z-50 w-full top-4 left-[50%] -translate-x-[50%] bg-transparent text-sm  px-4'>
      <div className=" flex flex-row items-center justify-between bg-white p-3 shadow-sm rounded-xl border-2 border-gray-100">
        <Link href={`#`} className=''>
          <Logo className='scale-75' width={'200'} height={50}/>
        </Link>

        <ul className='flex flex-row items-center justify-center gap-12 font-Roboto text-gray-500'>
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
        
        <ArrowButton type='right' className='w-[120px] h-[55px] bg-grey'>
          <span>Delegate</span>
        </ArrowButton>

      </div>

    </nav>
  )
}

export default Navbar