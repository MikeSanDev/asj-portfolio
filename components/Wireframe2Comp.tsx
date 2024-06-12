import Link from 'next/link';
import Navbar from './Navbar';
import Image from 'next/image';



export default function Wireframe2Comp() {
    return (
        <div>
            {/* Header info */}
            <div className="bg-secondaryColor shadow-md mx-auto" style={{ width: '70%', maxWidth: '1200px', height: 'auto' }}>
                <em className='header-info2 flex justify-center'>Header Information/Title Info</em>
                <div className='flex justify-center fig-box2'>
                    <Image
                        src="/assets/fig-box.png"
                        alt='box'
                        width={500}
                        height={500} />
                </div>
            </div>
            <main className="mx-auto" style={{ width: '60%', maxWidth: '1200px', height: '500px' }} >
                <div className="max-w-7xl space-x-2 flex">
                    <div className=" wf2-sub-div flex-1 flex justify-center items-center flex-col">
                        <h1 className="sub-header2 ">Sub-Header</h1>
                        <p className="sub-text2 " >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Et ligula ullamcorper malesuada proin libero nunc consequat. Sagittis orci a scelerisque purus semper.
                        </p>
                        <p className="sub-text2 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
                    </div>
                    <div className="flex-1 flex justify-center mt-10">
                        <Image
                            src="/assets/fig-box.png"
                            alt='box'
                            width={400}
                            height={300} />
                    </div>
                </div>
                <div>
                    <ul className="flex justify-center text-white mt-10 pb-10 space-x-4">
                        <Link href="/">
                            <li>Wireframe 1</li>
                        </Link>
                        <li>Wireframe 3</li>
                        <li>Wireframe 4</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}