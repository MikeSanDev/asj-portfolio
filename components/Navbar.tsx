import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-secondaryColor shadow-md mx-auto" style={{ width: '70%', maxWidth: '1200px', height: '400px'}} >     
     <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex justify-center items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <ul className="text-l font-bold text-gray-800">Aaron San Jose</ul>
              </Link>
            </div>
            <div className="flex items-center ">
              <Link href="/work">
                <li className="nav-item1 text-sm text-mainBg hover:text-gray-200 px-3 mr-20 pr-20 py-2">Work</li>
              </Link>
              <Link href="/about">
                <li className="nav-item2 text-sm  text-mainBg hover:text-gray-200 px-3 ml-20 pl-20 py-2">About</li>
              </Link>
              <Link href="/contact">
                <li className="text-gray-800 text-sm  hover:text-gray-200 px-3 py-2">Resume</li>
              </Link>
            </div>
          </div>
        </div>
          <em className='header-info'>Header Information</em> 
          <div>

          </div>
      </div>
    </nav>
  );
}