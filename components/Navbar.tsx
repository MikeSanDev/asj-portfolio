import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize(); // Set the initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="bg-white mx-auto sticky top-0 z-50">
      <div className="asj-width-margin mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            {isSmallScreen && (
              <Image
                src="/assets/asj-pfp.png"
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full z-10"
              />
            )}
            <Link href="/" className="font-bold black">ASJ</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 nav-item2">
            <li className="font-bold black hover:underline list-none ">
              <Link href="/workPage" >Work</Link>
            </li>
            <li className="font-bold black hover:underline list-none">
              <Link href="/aboutPage">About</Link>
            </li>
            <li className="font-bold black hover:underline list-none">
              <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">Resume</a>
              </Link>
            </li>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="black focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 py-4  ">
          <li className="nav-item1 text-2xl italic black hover:underline list-none">
            <Link href="/workPage">- Work</Link>
          </li>
          <li className="nav-item2 text-2xl italic black hover:underline list-none">
            <Link href="/aboutPage">- About</Link>
          </li>
          <li className="text-2xl italic black hover:underline list-none">
            <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">- Resume</a>
            </Link>
          </li>
        </div>
      )}
    </nav>
  );
}