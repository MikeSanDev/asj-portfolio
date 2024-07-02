import Link from 'next/link';

export default function ReachFooter() {
  return (
    <footer className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
      <div className='text-white'>
        <p>Next / Coding Dojo</p>
        <h2>Craigslist Moodboard - Creating a redesign of Craigslist that also incentivizes user engagement</h2>
        <Link href="https://www.linkedin.com/in/asanjose/">Linkedin</Link>
        <Link href="https://drive.google.com/file/d/1XN3fCDg3PXbmL4PLIJiW_nkYljsL2e9j/view">Resume</Link>
      </div>
    </footer>
  );
}