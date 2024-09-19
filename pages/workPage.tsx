import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"


export default function workPage() {
    // Animation 
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
        <>
            <div>
                <Navbar />

                {/* Main */}
                <motion.div
                    className="asj-width-margin mx-auto px-4"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInSecond}
                >
                    {/* Case Studies */}
                    <h1 className="sub-header text-black pt-5">Case Studies</h1>
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
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}