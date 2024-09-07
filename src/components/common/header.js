import React from 'react'

const Header = () => {
  return (
    <header className="text-black py-5 px-10 flex justify-between items-end " id='navbar'>
      <div id="header-title" className="text-3xl font-bold flex-col flex  justify-center relative">
        <span className='font-normal text-3xl textColor'>Stump</span>
        <span className='font-semibold  text-xl -mt-2'>Strom</span>
      </div>
      <nav className="flex  gap-[1.8vw] items-center" id='nav-part2'>
        <h4 className='font-bold'><a href="#home" className="font-semibold">Home</a></h4>
        <h4 className='font-bold'><a href="#about" className="font-semibold">About</a></h4>
        <h4 className='font-bold'><a href="#contact" className="font-semibold">Contact</a></h4>
      </nav>
    </header>
  )
}

export default Header