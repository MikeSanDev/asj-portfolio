import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function aboutPage() {
    return (
        <div>
            <Navbar />
            {/* Header info */}
            <div className="bg-[#bb9f8c] shadow-md mx-auto" style={{ width: '70%', maxWidth: '1200px', height: 'auto' }}>
                <em className='header-info pl-5 flex justify-center'>Hello. I'm Aaron, I want to create things that will make people's lives easier.</em>
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
                        <p className="sub-text ">I care about discovering what people need to make their lives easier. UX design reflects on what I care about because designs are meticulously created with detailed research while focusing on the users themselves. I consider my strength being a flexible individual and capable of thriving within any system. Currently, I am looking to break into the UX design industry to better serve the people and their needs. I am also a dancer who spends countless hours honing their artistic expression. I used to work as a shift lead/barista at Foxtrot during it operations. Dance fuels my creativity because it pushes my physical and mental capabilities when discovering new movement pathways. Dancing requires you to navigate how your body can execute what your mind creates with its own physical limitations. Constantly drilling movement so your body can keep up with your imagination is something I live for. So I’m not afraid to throw down at the dance floor. I find that my coffee shop experience and dancing life make an interesting combination when it comes to UX design. Both of these occupations provide outlets of problem solving with users/customers and expressing creativity for new and practiced results. I believe that these provide a solid base for empathy for a diverse set of users. Mainly my connections and communications with people within my communities influenced my start for a career in UX design. Seeing my friends communicate what they love about their jobs or tackling on a bootcamp was the icing of the cake. I took a “leap of faith” in order to begin this journey. I am looking forward to create new designs and systems that will propel our lives forward.
                        </p>
                    </div>
                </div>

            </main>
        </div>
    );
}