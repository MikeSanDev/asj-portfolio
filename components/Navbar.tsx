import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Image
              src="/assets/asj-pfp.png"
              alt="Profile"
              width={50}
              height={50}
              className="rounded-full z-10 lg:hidden"
            />
            <Link href="/" className="text-l  font-bold text-white">Aaron San Jose</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <li className="nav-item1 text-sm text-white hover:underline list-none">
              <Link href="/workPage">Work</Link>
            </li>
            <li className="nav-item2 text-sm text-white hover:underline list-none">
              <Link href="/aboutPage">About</Link>
            </li>
            <li className="text-sm text-white hover:underline list-none">
              <Link href="/contact">Resume</Link>
            </li>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-3">
          <div className="flex items-center space-x-4 mb-4">
          </div>
          <li className="nav-item1 text-sm text-white hover:underline list-none">
            <Link href="/workPage">Work</Link>
          </li>
          <li className="nav-item2 text-sm text-white hover:underline list-none">
            <Link href="/aboutPage">About</Link>
          </li>
          <li className="text-sm text-white hover:underline list-none">
            <Link href="/contact">Resume</Link>
          </li>
        </div>
      )}
    </nav>
  );
}