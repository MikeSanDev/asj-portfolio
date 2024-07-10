import Navbar from "@/components/Navbar";
import ReachFooter from "@/components/ReachFooter";
import Image from "next/image";
import Link from "next/link";


export default function workPage() {
    return (
        <>
            <div>
                <Navbar />
                {/* Header info */}
                <div className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
                    <em className='header-info text-white flex justify-center'>Hello! I am Aaron San Jose and I welcome you to my portfolio!</em>
                    <div className='flex justify-center fig-box'>
                        <Image
                            src="/assets/yokai.png"
                            alt='box'
                            width={650}
                            height={600} />
                    </div>
                </div>
                {/* Main */}
                <div className="max-w-7xl mx-auto px-4">
                    {/* Case Studies */}
                    <h1 className="sub-header text-black pb-5">Case Studies</h1>
                    <div>
                        <Link href="/reachPage">
                            <p>Chicago Scholars</p>
                            <h3>Reach Dashboard - Building a product that creates a system for higher education staff to support their students.</h3>
                        </Link>
                    </div>
                </div >
                {/* Footer */}
                <ReachFooter />
            </div>
        </>
    );
}