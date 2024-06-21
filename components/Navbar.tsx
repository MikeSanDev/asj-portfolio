import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16" style={{ gap: '350px' }}> {/* Added gap for space between boxes */}
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-l font-bold text-white">Aaron San Jose</Link>
            <li className="nav-item1 text-sm text-white hover:underline list-none">
              <Link href="/workPage">Work</Link>
            </li>
          </div>
          <div className="flex items-center space-x-4">
            <li className="nav-item2 text-sm text-white hover:underline list-none">
              <Link href="/aboutPage">About</Link>
            </li>
            <li className="text-sm text-white hover:underline list-none">
              <Link href="/contact">Resume</Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}