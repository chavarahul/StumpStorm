import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className="text-black py-5 px-10 flex justify-between items-end " id='navbar'>
      <Link to={"/"} id="header-title" className="text-3xl font-bold flex-col flex  justify-center relative">
        <span className='font-normal text-3xl textColor'>Stump</span>
        <span className='font-semibold  text-xl -mt-2'>Strom</span>
      </Link>
      <div className=" w-2/3 flex-bet relative">
        <nav className="flex  gap-[1.8vw] items-center" id='nav-part2'>
          <h4 className='font-bold'><Link to="/" className="font-semibold">Home</Link></h4>
          <h4 className='font-bold'><Link to={"/Faq"} className="font-semibold">Faq</Link></h4>
          <h4 className='font-bold'><Link to="/events" className="font-semibold">Events</Link></h4>
        </nav>
        <div className="w-1/4 relative  h-full flex-bet  gap-[1.8vw] items-center">
        <h4 className='font-bold py-2.5 rounded-[20px] text-white px-6 bg-[#FE320A] '><Link to={"/login"} className="font-semibold">Login</Link></h4>
        <h4 className='font-bold py-2.5 rounded-[20px] text-white px-6 bg-[#FE320A]'><Link to="/register" className="font-semibold">Register</Link></h4>
        </div>
      </div>
    </header>
  )
}

export default Header