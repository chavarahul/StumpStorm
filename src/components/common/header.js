import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0,        zIndex:'99999',
          duration: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        zIndex:'99999',
        onComplete: () => menuRef.current.style.display = 'none'
      });
    }
  }, [isMenuOpen]);

  return (
    <header className="text-black py-5 px-10 flex justify-between items-end" id="navbar">
      <Link to="/" id="header-title" className="text-3xl font-bold flex-col flex justify-center relative">
        <span className="font-normal text-3xl textColor">Stump</span>
        <span className="font-semibold text-xl -mt-2">Strom</span>
      </Link>

      <div className="w-2/3 flex-bet relative max-lg:hidden">
        <nav className="flex gap-[1.8vw] items-center" id="nav-part2">
          <h4 className="font-bold">
            <Link to="/" className="font-semibold">Home</Link>
          </h4>
          <h4 className="font-bold">
            <Link to="/Faq" className="font-semibold">Faq</Link>
          </h4>
          <h4 className="font-bold">
            <Link to="/events" className="font-semibold">Events</Link>
          </h4>
        </nav>
        <div className="w-1/4 relative flex-bet gap-[1.8vw] items-center">
          <h4 className="font-bold py-2.5 rounded-[20px] text-white px-6 bg-[#FE320A]">
            <Link to="/login" className="font-semibold">Login</Link>
          </h4>
          <h4 className="font-bold py-2.5 rounded-[20px] text-white px-6 bg-[#FE320A]">
            <Link to="/register" className="font-semibold">Register</Link>
          </h4>
        </div>
      </div>

      <button
        className="lg:hidden flex items-center text-black"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6 -mt-16"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <div
        ref={menuRef}
        className={`lg:hidden absolute z-[99999] top-20 right-10 bg-white shadow-lg rounded-lg p-4 w-60 ${isMenuOpen ? 'block' : 'hidden'}`}
        style={{ display: isMenuOpen ? 'block' : 'none' }}
      >
        <nav className="flex flex-col gap-4">
          <h4 className="font-bold">
            <Link to="/" className="font-semibold">Home</Link>
          </h4>
          <h4 className="font-bold">
            <Link to="/Faq" className="font-semibold">Faq</Link>
          </h4>
          <h4 className="font-bold">
            <Link to="/events" className="font-semibold">Events</Link>
          </h4>
          <h4 className="font-bold">
            <Link to="/login" className="font-semibold">Login</Link>
          </h4>
          <h4 className="font-bold">
            <Link to="/register" className="font-semibold">Register</Link>
          </h4>
        </nav>
      </div>
    </header>
  );
}

export default Header;
