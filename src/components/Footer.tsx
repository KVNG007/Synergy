import Link from 'next/link'
import React from 'react'
import { LinkedinIcon, Logo } from './Icons'
import { ArrowButton } from './Buttons'

const Footer = () => {
  return (
    <footer className='relative z-40 bg-gray-100 text-sm p-4 '>
      <div className=" h-max md:h-[240px] flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-6 shadow-sm rounded-xl border-2 border-gray-100">

        <aside className="h-full  font-Roboto flex flex-col items-start justify-between">
            <Link href={`#`} className=''>
                <Logo className='' width={150} height={50}/>
            </Link>
            
            <div className="hidden md:flex flex-col gap-2 text-bold">
                <a href="" className="text-black underline text-sm">Privacy Policy</a>
                <a href="" className="text-black underline text-sm">Terms & Conditions</a>
            </div>

            <p className='hidden md:contents text-gray-500'>&copy; 2024 Synergy.<br/> All rights reserved.</p>

        </aside>

        <aside className="h-full text-left font-Roboto flex flex-col items-start gap-4 pt-4 md:pr-10">
            <p>Menu:</p>
            
            <ul className='flex flex-col items-start justify-start gap-4 font-Roboto text-gray-500'>
                <Link href={`#`} className=''>
                    <li>Home</li>
                </Link>

                <Link href={`#`} className=''>
                    <li>Our mission</li>
                </Link>

                <Link href={`#`} className=''>
                    <li>Benefits</li>
                </Link>
            </ul>

        </aside>

        <aside className="h-full w-full max-w-[350px] text-left font-Roboto flex flex-col items-start justify-between pt-4 md:pr-10">
            <p className='hidden md:contents'>Social Media:</p>
            
            <ul className='w-full grid grid-cols-2 gap-2 font-Roboto text-gray-500'>
                <Link href={`#`} className=' w-full [h-50px] md:h-[55px] p-2 px-3 md:p-3 flex items-center justify-between bg-black rounded-xl'>
                    <LinkedinIcon className='w-[25px] h-[25px] md:w-[35px]  md:h-[35px]' /> <p className=" text-base md:text-lg text-white font-Vietnam-regular">Linkedin</p>
                </Link>
                <Link href={`#`} className=' w-full [h-50px] md:h-[55px] p-2 px-3 md:p-3 flex items-center justify-between bg-accent rounded-xl'>
                    <LinkedinIcon className='w-[25px] h-[25px] md:w-[35px]  md:h-[35px]' /> <p className=" text-base md:text-lg text-white font-Vietnam-regular">Linkedin</p>
                </Link>
                <Link href={`#`} className=' w-full [h-50px] md:h-[55px] p-2 px-3 md:p-3 flex items-center justify-between bg-black rounded-xl'>
                    <LinkedinIcon className='w-[25px] h-[25px] md:w-[35px]  md:h-[35px]' /> <p className=" text-base md:text-lg text-white font-Vietnam-regular">Linkedin</p>
                </Link>
                <Link href={`#`} className=' w-full [h-50px] md:h-[55px] p-2 px-3 md:p-3 flex items-center justify-between bg-black rounded-xl'>
                    <LinkedinIcon className='w-[25px] h-[25px] md:w-[35px]  md:h-[35px]' /> <p className=" text-base md:text-lg text-white font-Vietnam-regular">Linkedin</p>
                </Link>
            </ul>

        </aside>

        <aside className="h-full font-Roboto  flex md:hidden flex-col items-start justify-between gap-6 mt-4">
            
            <div className="flex flex-col gap-2 text-bold py-2">
                <a href="" className="text-black underline text-sm">Privacy Policy</a>
                <a href="" className="text-black underline text-sm">Terms & Conditions</a>
            </div>

            <p className='text-gray-500'>&copy; 2024 Synergy.<br/> All rights reserved.</p>

        </aside>

      </div>

    </footer>
  )
}

export default Footer