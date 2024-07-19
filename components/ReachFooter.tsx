import Link from 'next/link';

export default function ReachFooter() {
  return (
    <footer className="bg-black p-4" >
      <div className='text-white flex justify-center flex-col max-w-3xl mx-auto px-4 '>
        <div className='pt-6 flex flex-col'>
          <Link href="/codingDojo" >Next / Coding Dojo</Link>
          <strong className='text-2xl'>Craigslist Moodboard - Creating a redesign of Craigslist that also incentivize user engagement</strong>
        </div>
        <div className='pt-6 flex flex-row '>
          <Link href="https://www.linkedin.com/in/asanjose/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className='underline italic'>Linkedin</a>
          </Link>
          <Link href="https://drive.google.com/file/d/1XN3fCDg3PXbmL4PLIJiW_nkYljsL2e9j/view" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className='ml-4 underline italic'>Resume</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}