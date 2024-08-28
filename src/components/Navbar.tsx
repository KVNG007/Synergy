"use client"
import React, {useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Logo } from './Icons'
import { ArrowButton } from "./Buttons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from '@radix-ui/react-icons'


const Navbar = () => {

  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <nav className='fixed z-50 w-full top-4 left-[50%] -translate-x-[50%] bg-transparent text-sm  px-4'>
      <div className=" flex flex-row items-center justify-between bg-white p-3 shadow-sm rounded-xl border-2 border-gray-100">
        <Link href={`#`} className=''>
          <Logo width={'200'} height={50} className={`w-[120px] md:w-[150px]`} />
        </Link>

        <ul className='hidden md:flex flex-row items-center justify-center gap-12 font-Roboto text-gray-500'>
          <Link href={`#`} className=''>
            <li>Home</li>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className='flex flex-row items-center gap-1 cursor-pointer' >Our products <ChevronDownIcon fontSize={10} color='grey' /></p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-Roboto w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className='font-Roboto'>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={`#`} className=''>
            <li>Consulting</li>
          </Link>
        </ul>
        
        <ArrowButton type='right' className='w-[120px] h-[55px] bg-grey hidden md:flex'>
          <span>Delegate</span>
        </ArrowButton>

        <button className='flex flex-col items-end w-[40px] p-2 aspect-square bg-accent justify-between gap-1 rounded-lg cursor-pointer' 
          onClick={()=> setShowNav(prev => !prev)}
        >
          <span className="w-full h-[2.5px] bg-white"></span>
          <span className="w-[70%] h-[2.5px] bg-white"></span>
          <span className="w-full h-[2.5px] bg-white"></span>
        </button>





        {/* <NavigationMenu>
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
              <button className='flex flex-col items-center w-[40px] p-2 aspect-square bg-accent justify-between gap-1 rounded-lg cursor-pointer' >
                <span className="w-full h-[2.5px] bg-white"></span>
                <span className="w-full h-[2.5px] bg-white"></span>
                <span className="w-full h-[2.5px] bg-white"></span>
              </button>
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-full gap-3 p-4  ">
                  <li>adfkvadfv</li>
                  <li>adfkvadfv</li>
                  <li>adfkvadfv</li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>
      </NavigationMenu> */}
      </div>

      <div className={`h-max p-6 flex flex-col gap-[80px] bg-white rounded-xl transition-all ease-in-out duration-300 
        ${showNav ? 'opacity-1 translate-y-[20px] pointer-events-auto' : 'opacity-0 translate-y-[0px] pointer-events-none'}`}
      >
        <ul className='flex flex-col items-start justify-center gap-4 text-2xl font-Vietnam-smibold text-black'>
          <Link href={`#`} className=''>
            <li>Home</li>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className='flex flex-row items-center gap-1 cursor-pointer' >Our products <ChevronDownIcon fontSize={10} color='grey' /></p>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="font-Roboto w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Keyboard shortcuts
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent className='font-Roboto'>
                      <DropdownMenuItem>Email</DropdownMenuItem>
                      <DropdownMenuItem>Message</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>More...</DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuItem>
                  New Team
                  <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>GitHub</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuItem disabled>API</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                Log out
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href={`#`} className=''>
            <li>Consulting</li>
          </Link>
        </ul>
        
        <ArrowButton type='right' className='w-full h-[55px] bg-grey'>
          <span>Delegate</span>
        </ArrowButton>
      </div>

    </nav>
  )
}

export default Navbar