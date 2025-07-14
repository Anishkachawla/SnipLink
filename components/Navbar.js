import React from 'react'
import Image from 'next/image'
import logoimg from '../assets/logo.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-black border border-b-2 border-violet-800 text-white rounded-full mx-25 my-5 p-4 flex justify-between'>
        <Image src={logoimg} alt='logo' height={2} width={100}></Image>
        <ul className='flex gap-4 font-bold text-lg p-3'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/"><li>About</li></Link>
            <Link href="/"><li>Contact Us</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
