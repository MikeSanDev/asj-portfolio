import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function aboutPage() {
    return (
        <div>
            <nav className="bg-[#bb9f8c] shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-center items-center h-16" style={{ gap: '350px' }}> {/* Added gap for space between boxes */}
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-l font-bold text-black">Aaron San Jose</Link>
                            <li className="nav-item1 text-sm text-black hover:underline list-none">
                                <Link href="/workPage">Work</Link>
                            </li>
                        </div>
                        <div className="flex items-center space-x-4">
                            <li className="nav-item2 text-sm text-black hover:underline list-none">
                                <Link href="/aboutPage">About</Link>
                            </li>
                            <li className="text-sm text-black hover:underline list-none">
                                <Link href="/contact">Resume</Link>
                            </li>
                        </div>
                    </div>
                </div>
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
            <div className="max-w-4xl mx-auto px-4 ">
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