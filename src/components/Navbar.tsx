import React from 'react'
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

          {/* <Link href={`#`} className=''>
            <li>Our products</li>
          </Link> */}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <p className='flex flex-row items-center gap-1' >Our products <ChevronDownIcon fontSize={10} color='grey' /></p>
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
        
        <ArrowButton type='right' className='w-[120px] h-[55px] bg-grey'>
          <span>Delegate</span>
        </ArrowButton>

      </div>

    </nav>
  )
}

export default Navbar