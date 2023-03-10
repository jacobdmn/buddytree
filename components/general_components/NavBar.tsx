import React from 'react'
import Image from 'next/image'

import logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <nav className="w-full bg-Blue px-8 md:px-32">
      <div className="relative z-30 mx-auto flex h-28 max-w-7xl items-center justify-between gap-4 border-b border-gray-50/20 md:gap-0">
        {/* <h1 className='text-xl text-white font-bold'>Buddytree</h1> */}
        <Image
          src={logo}
          height={26}
          width={152}
          alt="logo"
          className="object-cover bg-transparent"
        />
        <a
          href="https://www.buddytree.org/home"
          className="z-30 inline-block whitespace-nowrap rounded border border-white bg-transparent px-5 py-2 font-nunito text-xs font-bold text-white transition-all hover:scale-105"
        >
          GET STARTED FOR FREE
        </a>
      </div>
    </nav>
  )
}

export default NavBar
