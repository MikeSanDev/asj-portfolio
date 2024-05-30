import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <ul className="text-xl font-bold text-gray-800">Aaron San Jose</ul>
              </Link>
            </div>
            <div className="ml-10 flex items-baseline space-x-10">
              <Link href="/work">
                <li className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Work</li>
              </Link>
              <Link href="/about">
                <li className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">About</li>
              </Link>
              <Link href="/contact">
                <li className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium">Resume</li>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}