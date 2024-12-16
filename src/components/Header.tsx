"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import {HiMenuAlt3} from 'react-icons/hi' //humburger icon
import {HiX} from 'react-icons/hi' //close icon

const Header = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen) //toggle menu open close
  };

  const closeMenu = () => {
    setIsMenuOpen(false);  //close menu
  }
  return (
    <header className='bg-gray-500 text-white py-5 flex justify-between items-center px-10 relative z-10'>
      <h1 className='text-2xl font-bold'>ShoeKart</h1>

      {/* Desktop Navbar */}
      <div className='hidden md:block'>
      <nav className='md:flex gap-5'>
        <Link href={"/"} onClick={closeMenu} className='hover:underline underline-offset-4'>Home</Link>
        <Link href={"/about"} onClick={closeMenu} className='hover:underline underline-offset-4'>About</Link>
        <Link href={"/shoes"} onClick={closeMenu} className='hover:underline underline-offset-4'>Collection</Link>
        <Link href={"/contact"} onClick={closeMenu} className='hover:underline underline-offset-4'>Contact</Link>
        <FaShoppingCart className="text-white text-xl"/>
      </nav>
      </div>

      {/* Mobile Navbar Humburger Menu */}
      <div className ="md:hidden flex items-center sm:block">
        <HiMenuAlt3 className ="text-white text-3xl cursor-pointer"
        onClick={toggleMenu} //toggle menu on click
        />
      </div>

      {/* Mobile menu */}
      <div className= {`${
        isMenuOpen ? 'block' : 'hidden'
      } absolute top-0 left-0 w-full h-[300px] bg-gray-500 p-5 md:hidden z-20`}
      >
        {/* Close button */}
        <div className='flex justify-end'>
          <HiX 
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu}/>
        </div>

        <nav className='flex flex-col items-center gap-5'>
        <Link href={"/"} onClick={closeMenu}>Home</Link>
        <Link href={"/about"} onClick={closeMenu}>About</Link>
        <Link href={"/shoes"} onClick={closeMenu}>Collection</Link>
        <Link href={"/contact"} onClick={closeMenu}>Contact</Link>
        <FaShoppingCart className="text-white text-xl"/>
        </nav>
      </div>
    </header>
  )
}

export default Header
