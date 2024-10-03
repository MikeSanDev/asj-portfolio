import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white p-10" >
            <div className='text-black flex justify-center flex-col footer-width-margin mx-auto px-4 '>
                <h1 className='text-2xl ml-4 text-center underline italic'>Connect with me:</h1>
                <div className='pt-4 flex flex-col space-x-2 items-center  pb-4'>
                    <Link href="https://www.linkedin.com/in/asanjose/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 pt-2 text-[20px] italic hover:underline'>Linkedin</a>
                    </Link>
                    <Link href="https://www.instagram.com/ernsanjose/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 pt-2 text-[20px] italic hover:underline'>Instagram</a>
                    </Link>
                    <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 pt-2 text-[20px] italic hover:underline '>Resume</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}