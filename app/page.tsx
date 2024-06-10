import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from 'next/link';
import "../styles/globals.css";


export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mx-auto" style={{ width: '70%', maxWidth: '1200px', height: '500px' }} >
        <div className="max-w-7xl mx-auto px-4 ">
          <h1 className="sub-header">Sub-Header</h1>
          <div className="flex justify-center">
            <p className="sub-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Et ligula ullamcorper malesuada proin libero nunc consequat. Sagittis orci a scelerisque purus semper.
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <Image
              src="/assets/fig-box.png"
              alt='box'
              width={800}
              height={500} />
          </div>
        </div>
        <div>
          <ul className="flex justify-center text-white mt-10 pb-10 space-x-4">
            <Link href="/wireframe2Page">
              <li>Wireframe 2</li>
            </Link>
            <li>Wireframe 3</li>
            <li>Wireframe 4</li>
          </ul>
        </div>
      </main>
    </div>
  );
}