import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function aboutPage() {
    return (
        <div>
            <Navbar />
            {/* Header info */}
            <div className="bg-[#bb9f8c] shadow-md mx-auto" style={{ width: '70%', maxWidth: '1200px', height: 'auto' }}>
                <em className='header-info pl-5 flex justify-center'>Hello. I am Aaron, I want to create things that will make peoples lives easier.</em>
                <div className='flex justify-center fig-box'>
                    <Image
                        src="/assets/fig-box.png"
                        alt='box'
                        width={500}
                        height={500} />
                </div>
            </div>
            {/* Main Body */}
            <main className="mx-auto" style={{ width: '70%', maxWidth: '1200px', height: '500px' }} >
                <div className="max-w-7xl mx-auto px-4 ">
                    {/* <h1 className="sub-header">Sub-Header</h1> */}
                    <div className="flex justify-center">
                        <p className="sub-text text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sem sem, molestie in augue sed, commodo aliquet sem. Nullam accumsan ullamcorper eros quis varius. Quisque felis eros, lacinia vel dapibus a, pretium et diam. Phasellus facilisis dolor condimentum urna interdum, et malesuada dolor semper. Nulla id posuere libero. Nam luctus libero et mauris placerat finibus. Integer accumsan id velit nec mollis. Praesent arcu odio, fringilla sed tortor sollicitudin, mollis pretium lacus. In tempus feugiat quam, eu pretium risus pellentesque sit amet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris purus ipsum, egestas vel tincidunt in, hendrerit a risus. Vestibulum finibus sollicitudin elit ac egestas. Maecenas porttitor tortor sit amet hendrerit dignissim.
                            Nam et dui ac est imperdiet tincidunt. Integer magna diam, ornare quis consequat nec, dictum id ipsum. Morbi nisl ligula, convallis eget bibendum ac, suscipit vel erat.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}