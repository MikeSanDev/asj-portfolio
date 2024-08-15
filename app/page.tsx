"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import "../styles/globals.css";


export default function Home() {
  const [message, setMessage] = useState("");

  const handleBallClick = (route: string) => {
    console.log(`Navigating to ${route}`);
  };

  const handleMouseEnter = (message: string) => {
    setMessage(message);
  };

  const handleMouseLeave = () => {
    setMessage("");
  };

  return (
    <div>
      <div className="relative w-full h-screen pkmn-page">
        <Image
          src="/assets/pkmn-bg.png"
          alt="background"
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full"
        />
        <Link href="/workPage">
          <li className="absolute no-bullets ball1" style={{ top: '30%', left: '15%' }} onClick={() => handleBallClick('/workPage')}
            onMouseEnter={() => handleMouseEnter('Work Experience')}
            onMouseLeave={handleMouseLeave}>
            <Image
              src="/assets/ball1.png"
              alt="ball1"
              width={150}
              height={100}
            />
          </li>
        </Link>
        <Link href="/aboutPage">
          <li className="absolute no-bullets ball2" style={{ top: '30%', right: '17%' }} onClick={() => handleBallClick('/aboutPage')}
            onMouseEnter={() => handleMouseEnter('About Me')}
            onMouseLeave={handleMouseLeave}>
            <Image
              src="/assets/ball2.png"
              alt="ball2"
              width={150}
              height={100}
            />
          </li>
        </Link>
        <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
          <a target="_blank" rel="noopener noreferrer" className="absolute no-bullets ball3" style={{ bottom: '20%', left: '44.3%' }} onClick={() => handleBallClick('https://drive.google.com/file/d/1XN3fCDg3PXbmL4PLIJiW_nkYljsL2e9j/view')}
            onMouseEnter={() => handleMouseEnter('Resume')}
            onMouseLeave={handleMouseLeave}>
            <Image
              src="/assets/ball3.png"
              alt="ball3"
              width={150}
              height={100}
            />
          </a>
        </Link>
      </div>
      <div className={`pkmn-msg ${message ? 'opacity-100' : 'opacity-0'} transition-opacity fixed bottom-0 left-0 right-1 mx-auto p-4 mb-4`}>
        {message}
      </div>
    </div>
  );
}