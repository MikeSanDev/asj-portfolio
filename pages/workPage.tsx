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
                    <div className="max-w-2xl mx-auto px-4">
                        <em className='header-info text-white flex justify-center'>Hello! I am Aaron San Jose and I welcome you to my portfolio!</em>
                        <div className='flex justify-center fig-box'>
                            <Image
                                src="/assets/yokai.png"
                                alt='box'
                                width={700}
                                height={600} />
                        </div>
                    </div>
                </div>
                {/* Main */}
                <div className="max-w-2xl mx-auto px-4">
                    {/* Case Studies */}
                    <h1 className="sub-header text-black pt-5 ">Case Studies</h1>
                    <div className="py-5">
                        {/* ??? DOES HE WANT THE IMAGE ONLY SELECT TO LINK OR TEXT ??? */}
                        <p className="from-neutral-300">Chicago Scholars</p>
                        <h2 className="text-2xl pb-5">Reach Dashboard - Building a product that creates a system for higher education staff to support their students.</h2>
                        <Link href="/reachPage">
                            <Image
                                src="/assets/dashboard.png"
                                alt='final dash'
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