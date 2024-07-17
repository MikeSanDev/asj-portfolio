import Navbar from "@/components/Navbar";
import ReachFooter from "@/components/ReachFooter";
import Image from "next/image";
import Link from "next/link";

export default function craigsList() {
    return (
        <div>
            <Navbar />
            <div className="bg-black shadow-md mx-auto w-full">
                <em className='header-info text-white flex justify-center'>Craigslist Moodboard</em>
                <div className='flex justify-center fig-box'>
                    <Image
                        src="/assets/reach.png"
                        alt='box'
                        width={650}
                        height={600} />
                </div>
            </div>
            <div className="flex-grow mx-auto w-4/5 max-w-5xl">
                <div className="flex justify-center">
                    <Image
                        src="/assets/reach-banner.png"
                        alt='box'
                        width={800}
                        height={500} />
                </div>
                <ReachFooter />
            </div>
        </div>
    )
}