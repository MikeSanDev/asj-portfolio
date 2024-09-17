import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black p-10" >
            <div className='text-white flex justify-center flex-col footer-width-margin mx-auto px-4 '>
                <h1 className='text-2xl ml-4 text-center underline italic'>Connect with me:</h1>
                <div className='pt-4 flex flex-row justify-center pb-4'>
                    <Link href="https://www.instagram.com/ernsanjose/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 italic'>Instagram</a>
                    </Link>
                    <Link href="https://www.linkedin.com/in/asanjose/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 italic'>Linkedin</a>
                    </Link>
                    <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 italic '>Resume</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}