import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-l font-bold text-white">Aaron San Jose</Link>
            </div>
            <div className="flex items-center ml-10">
              <ul className="flex space-x-8">
                <li className="nav-item1 inline-block text-sm text-white hover:underline px-3 pr-20 py-2">
                  <Link href="/workPage">Work</Link>
                </li>
                <li className="nav-item2 inline-block text-sm text-white hover:underline px-3 pl-20 py-2">
                  <Link href="/aboutPage">About</Link>
                </li>
                <li className="inline-block text-sm text-white hover:underline px-3 py-2">
                  <Link href="/contact">Resume</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}