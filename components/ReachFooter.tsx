import Link from 'next/link';

export default function ReachFooter() {
  return (
    <footer className="bg-black p-4" >
      <div className='text-white flex justify-center flex-col width-1/3'>
        <div className='pt-6 flex justify-center text-center flex-col'>
          <p >Next / Coding Dojo</p>
          <strong>Craigslist Moodboard - Creating a redesign of Craigslist that also incentivizes user engagement</strong>
        </div>
        <div className='pt-6 flex justify-evenly'>
          <Link href="https://www.linkedin.com/in/asanjose/">Linkedin</Link>
          <Link href="https://drive.google.com/file/d/1XN3fCDg3PXbmL4PLIJiW_nkYljsL2e9j/view">Resume</Link>
        </div>
      </div>
    </footer>
  );
}