import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";


export default function workPage() {
    return (
        <>
            <div>
                <Navbar />
                {/* Header info */}
                <div className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
                    <div className="asj-width-margin mx-auto px-4 text-center">
                        <strong className='header-info text-white italic '>Hello! I&apos;m Aaron San Jose. <br />A UX/UI Designer</strong>
                        <div className='flex justify-center fig-box'>
                            <Image
                                className="yokai-img"
                                src="/assets/yokai.png"
                                alt='box'
                                width={650}
                                height={600} />
                        </div>
                    </div>
                </div>
                {/* Main */}
                <div className="asj-width-margin mx-auto px-4">
                    {/* Case Studies */}
                    <h1 className="sub-header text-black pt-5 ">Case Studies</h1>
                    <div className="py-5">
                        <strong className="from-neutral-300">Chicago Scholars</strong>
                        <p className="text-2xl italic font-extralight work-text pb-5">Reach Dashboard - A product that manages student support systems for continuing education staff.</p>
                        <Link href="/reachPage">
                            <Image
                                className="img-border"
                                src="/assets/dashboard.png"
                                alt='Reach Dashboard'
                                width={800}
                                height={400} />
                        </Link>
                    </div>
                    <div className="py-5">
                        <strong className="from-neutral-300">Coding Dojo</strong>
                        <p className="text-2xl italic font-extralight work-text pb-5 ">Craiglist Moodboard - A redesign of Craigslist encouraging user engagement.</p>
                        <Link href="/craigsList">
                            <Image
                                className="mb-10"
                                src="/assets/craiglist-dash.png"
                                alt='Coding Dojo Craigslist Dashboard'
                                width={800}
                                height={400} />
                        </Link>
                    </div>
                </div >
                {/* Footer */}
                <Footer />
            </div>
        </>
    );
}