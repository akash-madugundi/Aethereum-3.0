import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="fixed top-9 w-full z-1">
      <div className="blurred-background w-[350px] sm:w-[45%] md:w-[37%] lg:w-[40%] mx-auto flex justify-center items-center py-3">
        <div className="flex gap-7 md:gap-10 lg:gap-20">
          <Link href="/" className='navbar__link relative'>
            Home
          </Link>
          <Link href="/events" className='navbar__link relative'>
            Events
          </Link>
          <Link href="/team" className='navbar__link relative'>
            Team
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
