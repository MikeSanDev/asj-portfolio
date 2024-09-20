import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface NavbarProps {
  backgroundColor?: string; // Optional prop with a string type
  textColor?: string;
}

export default function Navbar({ backgroundColor = 'bg-white', textColor = 'text-black' }: NavbarProps) { // Default to white if no prop is provided
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
    <nav className={`navbar-container mx-auto sticky top-0 z-50 ${backgroundColor}`}>
      <div className="asj-width-margin mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className={`flex items-center space-x-4 ${textColor}`}>
            {isSmallScreen && (
              <Image
                src="/assets/asj-pfp.png"
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full z-10"
              />
            )}
            <Link href="/" className={`font-bold ${textColor}`}>ASJ</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4 nav-item2">
            <li className={`font-bold hover:underline list-none ${textColor}`}>
              <Link href="/#work">Work</Link>
            </li>
            <li className={`font-bold hover:underline list-none ${textColor}`}>
              <Link href="/#about">About</Link>
            </li>
            <li className={`font-bold hover:underline list-none ${textColor}`}>
              <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">Resume</a>
              </Link>
            </li>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className={`${textColor} focus:outline-none`}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-4 py-4">
          <li className={`nav-item1 text-2xl italic ${textColor}`}>
            <Link href="/#work">Work</Link>
          </li>
          <li className={`nav-item1 text-2xl italic ${textColor}`}>
            <Link href="/#about">About</Link>
          </li>
        </div>
      )}
    </nav>
  );
}