"use client";
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react';
import "../styles/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  // Animations
  const fadeInBackground = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 2, // 1-second duration for the background image
      },
    },
  };

  const fadeInBalls = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 4, // 3-second duration for the balls
      },
    },
  };
  // Pokeball Message
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

    <motion.div
      className="relative w-full h-screen pkmn-page"
      initial="hidden"
      animate="visible"
      variants={fadeInBackground}
    >
      <Navbar />
      <section id='section1'>
        {/* SECTION 1 - INTRO */}
        <div className="asj-width-margin mx-auto px-4 py-20 bg-white">
          <h1 className="from-neutral-300 text-center text-2xl italic font-extrabold">Hello there! I am Aaron San Jose A product designer focused on congenial and effective designs</h1>

        </div>
      </section>
      {/* SECTION 2 - POKEBALLS */}
      <section id='section2'>
        <div className="asj-width-margin mx-auto px-4 py-10" style={{ backgroundColor: '#9647ff' }}>
          <h1 className="text-black text-center text-2xl italic font-extrabold"
            style={{ textShadow: '2px 2px 0 #ffffff, -2px 2px 0 #ffffff, 2px -2px 0 #ffffff, -2px -2px 0 #ffffff' }}>
            The most influential decision I experienced growing up was...
          </h1>

          <div className="flex justify-center items-center space-x-8 mt-8">
            <div className="flex flex-col items-center">
              <Link href="/workPage">
                <motion.img
                  src="/assets/ball1.png"
                  alt="ball1"
                  width={150}
                  height={100}
                  className="cursor-pointer"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInBalls}
                  whileHover={{ scale: 1.2 }} // Expands on hover
                  onClick={() => handleBallClick('/workPage')}
                  onMouseEnter={() => handleMouseEnter('Work Experience')}
                  onMouseLeave={handleMouseLeave}
                />
              </Link>
              <p className="text-white mt-4">Work</p>
            </div>

            <div className="flex flex-col items-center">
              <Link href="/aboutPage">
                <motion.img
                  src="/assets/ball2.png"
                  alt="ball2"
                  width={150}
                  height={100}
                  className="cursor-pointer"
                  initial="hidden"
                  animate="visible"
                  variants={fadeInBalls}
                  whileHover={{ scale: 1.2 }} // Expands on hover
                  onClick={() => handleBallClick('/aboutPage')}
                  onMouseEnter={() => handleMouseEnter('About Me')}
                  onMouseLeave={handleMouseLeave}
                />
              </Link>
              <p className="text-white mt-4">About</p>
            </div>

            <div className="flex flex-col items-center">
              <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
                <a target="_blank" rel="noopener noreferrer">
                  <motion.img
                    src="/assets/ball3.png"
                    alt="ball3"
                    width={150}
                    height={100}
                    className="cursor-pointer"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInBalls}
                    whileHover={{ scale: 1.2 }} // Expands on hover
                    onClick={() => handleBallClick('https://drive.google.com/file/d/1XN3fCDg3PXbmL4PLIJiW_nkYljsL2e9j/view')}
                    onMouseEnter={() => handleMouseEnter('Resume')}
                    onMouseLeave={handleMouseLeave}
                  />
                </a>
              </Link>
              <p className="text-white mt-4">Contact</p>
            </div>
          </div>
          <h1 className="text-black text-center text-2xl italic font-extrabold pt-10"
            style={{ textShadow: '2px 2px 0 #ffffff, -2px 2px 0 #ffffff, 2px -2px 0 #ffffff, -2px -2px 0 #ffffff' }}>
            Choose your starter
          </h1>
        </div>
      </section>

      {/* SECTION3 - WORK */}
      <section id='section3'>
        < motion.div
          className="asj-width-margin mx-auto px-4 py-10"
          initial="hidden"
          animate="visible"
        >
          {/* Case Studies */}
          <h1 className="sub-header text-black pt-5" > Case Studies</h1 >
          <div className="py-5">
            <strong className="from-neutral-300">Chicago Scholars</strong>
            <p className="text-2xl italic font-extralight work-text pb-5">Reach Dashboard - A product that manages student support systems for continuing education staff.</p>
            <Link href="/reachPage">
              <Image
                className="img-border"
                src="/assets/reach-work.png"
                alt='Reach Dashboard'
                width={800}
                height={400} />
            </Link>
          </div>
          <div className="py-5">
            <strong className="from-neutral-300">Coding Dojo</strong>
            <p className="text-2xl italic font-extralight work-text pb-5">Craigslist Moodboard - A redesign of Craigslist encouraging user engagement.</p>
            <Link href="/craigsList">
              <Image
                className="mb-10"
                src="/assets/craiglist-dash.png"
                alt='Coding Dojo Craigslist Dashboard'
                width={800}
                height={400} />
            </Link>
          </div>
        </motion.div >
      </section>

      {/* SECTION 4 - ABOUT */}
      <section id='section4'>
        <div className="asj-width-margin mx-auto px-4 py-10" style={{ backgroundColor: '#9647ff' }}>
          <h1 className="text-black text-center text-2xl italic font-extrabold underline"
            style={{ textShadow: '2px 2px 0 #ffffff, -2px 2px 0 #ffffff, 2px -2px 0 #ffffff, -2px -2px 0 #ffffff' }}>
            About
          </h1>

          <div className="">
            <div className="flex flex-row items-center">
              <div>
                <Image
                  className="img-border"
                  src="/assets/asj-pfp.png"
                  alt='ASJ'
                  width={400}
                  height={400} />
              </div>
              <div>
                <p>I am a product designer based out of Chicago. I especially enjoy being part of the process where designs are coming to life and reviewed for user satisfaction.</p>
                <p>When I am not designing, you can catch me either practicing my dance moves, casting spells with Magic The Gathering and scoping out vintage clothing from my childhood.</p>
              </div>
            </div>
            <div className='videos flex flex-col'>
              <div className="flex flex-col items-center">
                <video
                  className="mr-10 about-video w-1/2"
                  src="/assets/dance2.mp4"
                  autoPlay
                  muted
                  loop />
              </div>

              <div className="flex flex-col items-center">
                <video
                  className="mb-5 ml-10 about-video w-1/2"
                  src="/assets/mtg.mp4"
                  autoPlay
                  muted
                  loop />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      < Footer />
    </motion.div >

  );
}