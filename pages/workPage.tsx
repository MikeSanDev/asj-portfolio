import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function workPage() {
    return (
        <div>
            <Navbar />
            {/* Header info */}
            <div className="bg-secondaryColor shadow-md mx-auto" style={{ width: '70%', maxWidth: '1200px', height: 'auto' }}>
                <em className='header-info pl-5'>Currently looking for work within UX/UI Design.</em>
                <div className='flex justify-center fig-box'>
                    <Image
                        src="/assets/fig-box.png"
                        alt='box'
                        width={500}
                        height={500} />
                </div>
            </div>
            {/* Main Body */}
            <main className="mx-auto" style={{ width: '70%', maxWidth: '1200px', height: '500px' }} >
                <div className="max-w-7xl mx-auto px-4 ">
                    <h1 className="sub-header">Sub-Header</h1>
                    <div className="flex justify-center">
                        <p className="sub-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Et ligula ullamcorper malesuada proin libero nunc consequat. Sagittis orci a scelerisque purus semper.
                        </p>
                    </div>
                    <div className="flex justify-center mt-10">
                        <Image
                            src="/assets/fig-box.png"
                            alt='box'
                            width={800}
                            height={500} />
                    </div>
                </div>

            </main>
        </div>
    );
}