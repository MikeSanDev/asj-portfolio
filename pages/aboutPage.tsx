import Footer from "@/components/Footer";
import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";


export default function AboutPage() {
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
        <div>
            <nav className="bg-[#bb9f8c] shadow-md mx-auto">
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
                            <Link href="/" className="font-bold text-black">Aaron San Jose</Link>
                            <li className="nav-item1 text-sm text-black hover:underline list-none md:block hidden">
                                <Link href="/workPage">Work</Link>
                            </li>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <li className="nav-item2 text-sm text-black hover:underline list-none">
                                <Link href="/aboutPage">About</Link>
                            </li>
                            <li className="text-sm text-black hover:underline list-none">
                                <Link href="/contact">Resume</Link>
                            </li>
                        </div>
                        <div className="md:hidden">
                            <button onClick={toggleMenu} className="text-black focus:outline-none">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden px-4 py-4 ">
                        <li className="nav-item1 text-2xl italic text-black hover:underline list-none">
                            <Link href="/workPage">- Work</Link>
                        </li>
                        <li className="nav-item2 text-2xl italic text-black hover:underline list-none">
                            <Link href="/aboutPage">- About</Link>
                        </li>
                        <li className="text-2xl italic text-black hover:underline list-none">
                            <Link href="/contact">- Resume</Link>
                        </li>
                    </div>
                )}
            </nav>
            {/* PFP */}
            <div className="pfp-container">
                <div className='flex justify-center  my-5'>
                    <Image
                        className=" shadow-md pfp mx-auto"
                        src="/assets/asj-pfp.png"
                        alt='box'
                        width={400}
                        height={400} />
                </div>
                <div className="pfp-border"></div>
            </div>
            {/* Main Body */}
            <div className="max-w-6xl mx-auto px-4 ">
                {/* <h1 className="sub-header">Sub-Header</h1> */}
                <div className="flex justify-center">
                    <em className="sub-text text-[25px] w-[75%]">
                        I am a product designer based out of Chicago with a passion to create effective and congenial designs.
                        I especially enjoy being part of the process where designs are coming to life and reviewed for user satisfaction.
                    </em>
                </div>
                <div className="max-w-4xl mx-auto my-10 px-4">
                    <h1 className="sub-header ml-4 my-10">When I&rsquo;m not designing...</h1>
                    <div className="about-boxes my-5 flex justify-center flex-col">
                        <div className="about-box1 items-center justify-center flex flex-row">
                            <video
                                className="mr-10 about-video w-1/2"
                                src="/assets/dance2.mp4"
                                autoPlay
                                muted
                                loop />
                            <div className="about-text text-[18px] w-1/2">
                                <p>Dance is my main form of expression. Navigating your creativity to rhythms of the music is my muse.
                                    It is my passion and continues to be the fuel of my creativity. I am seeking to cross over my creativity into dance into UX design.</p>
                            </div>
                        </div>
                        <div className="about-box2 items-center justify-center  flex flex-row">
                            <div className="about-text text-[18px] w-1/2">
                                <p>Magic The Gathering is a new hobby I am adding into my life. Playing the social format called Commander is quite the spectacle.
                                    Expressing your creativity into your deck building is constant problem solving while factoring the social experience with the other three players</p>
                            </div>
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

            <Footer />
        </div>
    );
}