import Link from 'next/link';

export default function ReachFooter() {
  return (
    <footer className="bg-black p-4" >
      <div className='text-white flex justify-center flex-col footer-width-margin mx-auto px-4 '>
        <div className='pt-6 flex flex-col'>
          <Link href="/craigsList" >
            <p>Next / Coding Dojo</p>
            <strong className='text-2xl reach-footer-title'>Craigslist Moodboard - Creating a redesign of Craigslist that also incentivize user engagement</strong>
          </Link>
        </div>
        <div className='py-4 flex flex-row justify-between'>
          <Link href="https://www.linkedin.com/in/asanjose/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className='text-[20px] italic hover:underline'>Linkedin</a>
          </Link>
          <Link href="https://www.instagram.com/ernsanjose/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className='text-[20px] italic hover:underline'>Instagram</a>
          </Link>
          <Link href="/assets/ASJ-resume.pdf" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className='text-[20px] italic hover:underline '>Resume</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}