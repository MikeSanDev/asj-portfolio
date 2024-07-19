import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black p-10" >
            <div className='text-white flex justify-center flex-col max-w-3xl mx-auto px-4 '>
                <div className='pt-6 flex flex-row '>
                    <Link href="/">
                        <p className='underline italic'>Home</p>
                    </Link>
                    <Link href="https://www.linkedin.com/in/asanjose/" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 underline italic'>Linkedin</a>
                    </Link>
                    <Link href="https://drive.google.com/file/d/1XN3fCDg3PXbmL4PLIJiW_nkYljsL2e9j/view" legacyBehavior>
                        <a target="_blank" rel="noopener noreferrer" className='ml-4 underline italic '>Resume</a>
                    </Link>
                </div>
            </div>
        </footer>
    );
}