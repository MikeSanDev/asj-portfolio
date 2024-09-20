import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";


export default function AboutPage() {
    // Animations
    const fadeInFirst = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5, // 1.5-second duration for the first div
            },
        },
    };

    const fadeInSecond = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.5, // 1.5-second duration for the second div
                delay: 1, // Delay by 1.5 seconds to wait for the first div to complete
            },
        },
    };


    return (
        <div>
            <Navbar />
            {/* PFP */}
            <div className="pfp-container">
                <motion.div
                    className='flex justify-center  my-10'
                    initial="hidden"
                    animate="visible"
                    variants={fadeInFirst}>
                    <Image
                        className=" shadow-md pfp mx-auto"
                        src="/assets/asj-pfp.png"
                        alt='box'
                        width={350}
                        height={400} />
                </motion.div>
                <div className="pfp-border"></div>
            </div>
            {/* Main Body */}
            <motion.div
                className="max-w-6xl mx-auto px-4 res-width"
                initial="hidden"
                animate="visible"
                variants={fadeInSecond}>
                <div
                    className="flex justify-center">
                    <strong className="sub-text text-[20px] w-[75%] italic">
                        I am a product designer based out of Chicago with a passion to create effective and congenial designs.
                        I especially enjoy being part of the process where designs are coming to life and reviewed for user satisfaction.
                    </strong>
                </div>
                <div className="max-w-4xl mx-auto my-5 px-4 res-width2">
                    <h1 className="sub-header ml-4 my-10">When I&rsquo;m not designing...</h1>
                    <div className="about-boxes mb-5 flex justify-center flex-col">
                        <div className="about-box1 items-center justify-center flex flex-row mb-10">
                            <video
                                className="mr-10 about-video w-1/2"
                                src="/assets/dance2.mp4"
                                autoPlay
                                muted
                                loop />
                            <div className="about-text w-1/2 font-extralight">
                                <p>Dance is my main form of expression. Navigating your creativity to rhythms of the music is my muse.
                                    It is my passion and continues to be the fuel of my creativity. I am seeking to cross over my creativity into dance into UX design.</p>
                            </div>
                        </div>
                        <div className="about-box2 items-center justify-center  flex flex-row mb-10">
                            <div className="about-text w-1/2 font-extralight">
                                <p>Magic The Gathering is a welcomed addition into my life. Playing the social format called Commander is quite the spectacle.
                                    Expressing creativity into your deck building is constant problem solving while factoring the social experience with the other three players</p>
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
            </motion.div>

            <Footer />
        </div>
    );
}