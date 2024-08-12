import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black p-6" >
            <div className='text-white flex justify-center flex-col footer-width-margin mx-auto px-4 '>
                <div className='pt-4 flex flex-row justify-center pb-4'>
                    <Link href="/">
                        <p className='footer-text underline italic'>Home</p>
                    </Link>
                    <Link href="https://www.linkedin.com/in/asanjose/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 underline italic'>Linkedin</a>
                    </Link>
                    <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 underline italic '>Resume</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}