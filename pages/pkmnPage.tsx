import Image from "next/image";
import Link from 'next/link';
import { useState } from 'react'; // Import useState hook
import "../styles/globals.css";

export default function PkmnPage() {
    const [message, setMessage] = useState(""); // State for message

    const handleBallClick = (route: string) => {
        console.log(`Navigating to ${route}`);
        // Perform navigation logic here using Next.js router or any other navigation method
    };

    const handleMouseEnter = (message: string) => {
        setMessage(message);
    };

    const handleMouseLeave = () => {
        setMessage("");
    };

    return (
        <div>
            <div className="relative w-full h-screen">
                <Image
                    src="/assets/pkmn-bg.png"
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
                <Link href="/workPage">
                    <li className="absolute" style={{ top: '30%', left: '15%' }} onClick={() => handleBallClick('/workPage')}
                        onMouseEnter={() => handleMouseEnter('Work Page')}
                        onMouseLeave={handleMouseLeave}>
                        <Image
                            src="/assets/ball1.png"
                            alt="ball1"
                            width={150}
                            height={100}
                        />
                    </li>
                </Link>
                <Link href="/aboutPage">
                    <li className="absolute" style={{ top: '30%', right: '17%' }} onClick={() => handleBallClick('/aboutPage')}
                        onMouseEnter={() => handleMouseEnter('About Page')}
                        onMouseLeave={handleMouseLeave}>
                        <Image
                            src="/assets/ball2.png"
                            alt="ball2"
                            width={150}
                            height={100}
                        />
                    </li>
                </Link>
                <Link href="/resumePage">
                    <li className="absolute" style={{ bottom: '20%', left: '44.3%' }} onClick={() => handleBallClick('/resumePage')}
                        onMouseEnter={() => handleMouseEnter('Resume Page')}
                        onMouseLeave={handleMouseLeave}>
                        <Image
                            src="/assets/ball3.png"
                            alt="ball3"
                            width={150}
                            height={100}
                        />
                    </li>
                </Link>
            </div>
            {/* Message display */}
            <div className="fixed bottom-0 left-0 right-0 bg-white text-black py-2 text-center">
                {message}
            </div>
        </div>
    );
}