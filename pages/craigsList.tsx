import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';
import CraigFooter from "@/components/CraigFooter";

export default function CraigsList() {
    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [selectedIndex2, setSelectedIndex2] = useState(0);

    const images1 = [
        { src: '/assets/clist-photos/caro1.jpg', alt: 'choose int design', question: 'Question 1', className: 'asj-carousel-font' },
        { src: '/assets/clist-photos/caro2.jpg', alt: 'color pallette', question: 'Question 2' },
        { src: '/assets/clist-photos/caro3.jpg', alt: 'furniture', question: 'Question 3' },
        { src: '/assets/clist-photos/caro4.jpg', alt: 'budget', question: 'Question 4' },
        { src: '/assets/clist-photos/livingroom.jpg', alt: 'jay', question: 'Jay Chavis Mood Board Layout' },
        { src: '/assets/clist-photos/janelle-mdbrd.jpg', alt: 'janelle', question: 'Janelle Smithson Mood Board List' },
    ];
    const images2 = [
        { src: '/assets/clist-photos/caro2-1.jpg', alt: 'minimalism', question: 'Question 1' },
        { src: '/assets/clist-photos/caro2-2.jpg', alt: 'couches', question: 'Question 2' },
        { src: '/assets/clist-photos/caro2-3.jpg', alt: 'warm', question: 'Question 3' },
        { src: '/assets/clist-photos/caro2-4.jpg', alt: 'final', question: 'Mood Board Generated' },
    ];

    const handlePrev1 = () => {
        setSelectedIndex1((prevIndex) => (prevIndex === 0 ? images1.length - 1 : prevIndex - 1));
    };

    const handleNext1 = () => {
        setSelectedIndex1((prevIndex) => (prevIndex === images1.length - 1 ? 0 : prevIndex + 1));
    };
    const handlePrev2 = () => {
        setSelectedIndex2((prevIndex) => (prevIndex === 0 ? images2.length - 1 : prevIndex - 1));
    };

    const handleNext2 = () => {
        setSelectedIndex2((prevIndex) => (prevIndex === images2.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        < >
            <Navbar backgroundColor="bg-[#333333]" textColor="text-white" />
            <div className="flex flex-col min-h-screen">

                {/* Header  */}
                <div className="bg-[#333333] shadow-md mx-auto w-full">
                    <strong className='reach-info text-4xl italic text-white flex justify-center'>Craigslist Dashboard</strong>
                    <div className='flex justify-center fig-box'>
                        <Image
                            src="/assets/craiglist-dash.png"
                            alt='box'
                            width={620}
                            height={500} />
                    </div>
                </div>



                {/* Overview */}
                <div className="flex-grow  flex justify-center flex-col res-margin-top">
                    <div className="bg-[#cccccc] phone-padding mx-auto  w-full  flex justify-center flex-col items-center">
                        <div className="asj-width-margin-reach flex justify-center flex-col w-full ">
                            <div className="py-5">
                                <h1 className="sub-header  text-black asj-padding">Overview</h1>
                                <p className="pr-5 reach-cols font-light">
                                    Coding dojo bootcamp cohort were assigned to create a redesign of Craigslist in teams of 3. We were tasked to conduct our own interviews, research, and design process for understanding what a UX/UI designer does. We were given one month and half to work as a team and half a month as an individual.
                                </p>
                            </div>
                            <div className="flex justify-center py-5">
                                <div className="flex flex-col text-center">
                                    <strong className="py-2 underline text-3xl"> What is the problem?</strong>
                                    <p className="pr-5 reach-cols text-2xl font-light">
                                        Craigslist user experience and user interface has consistently stayed the same since its creation. Why hasn&rsquo;t it changed? Does it need to be changed?
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h1 className="sub-header text-black py-5">What is Craigslist?</h1>
                                <p className="pr-5 reach-cols font-light">
                                    Craigslist was initially made for buyers and sellers to have a platform to make transactions amongst each other. It focuses on a simple and primitive user interface that make it straightforward for users to complete their purpose on their website without distractions. It also has features of forums and job postings that promote community and multiple usages of the platform.
                                </p>
                            </div>
                            <div className='flex justify-center py-5 fig-box'>
                                <Image
                                    src="/assets/clist-photos/main-banner.jpg"
                                    alt='box'
                                    width={620}
                                    height={600} />
                            </div>
                        </div>
                    </div>
                </div>



                {/* Goal/Role */}
                <div className="flex justify-center phone-padding flex-col items-center py-5">
                    <div className="asj-width-margin-reach  flex justify-center flex-col items-center py-5">
                        {/* inconsistency - should these be all caps? */}
                        <h1 className="sub-header text-black py-5">THE GOAL</h1>
                        <p className="font-light text-center text-2xl">Construct a redesign that solves the problems that arise from your teams&rsquo; user interviews.</p>
                    </div>
                    <div className="asj-width-margin-reach flex justify-center flex-col  py-5">
                        <h1 className="sub-header text-black py-5">THE SOLUTION AND IMPACT </h1>
                        <p className="font-light ">A mood-board that is generated with user&rsquo;s answers from a preset of questions regarding specific categories to encourage continuous user engagement.</p>
                    </div>
                    <div className="asj-width-margin-reach flex justify-center flex-col pt-10 py-5">
                        {/* should this sub-header be all caps? */}
                        <h1 className="sub-header text-left text-black">My Role</h1>
                        <p className="font-light pt-5">I conducted interviews with colleagues and friends who have used Craigslist on a consistent basis. I collaborated with two other designers on the ideation and production of the redesign.</p>
                    </div>
                </div>



                {/* Research */}
                <div className="bg-[#cccccc] w-full flex justify-center flex-col items-center">
                    <div className="asj-width-margin-reach phone-padding w-full flex justify-center flex-col  py-10">
                        <h1 className="sub-header text-black asj-padding">Research</h1>
                        <p className="pb-5">Craigslist has fierce competition on what it does well especially from Facebook Marketplace and Trovit. They use a modern design for clearer accessibility and navigation through pages compared to Craigslist. They also have profile customization to support a more comfortable and marketable experience.</p>
                        <div className="flex flex-row py-10">
                            <div className="flex flex-col w-1/2">
                                <strong className="pb-5 text-2xl">Interviews (5)</strong>
                                <ul className="list-disc italic pl-5 font-light">
                                    <li>Friends and Family 60%</li>
                                    <li>Coworkers 40%</li>
                                </ul>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <strong className="pb-5 text-2xl">Goals</strong>
                                <ul className="list-disc italic pl-5 font-light">
                                    <li>How does Craigslist still maintain its user base?</li>
                                    <li>Why do people use Craigslist over its competition?</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-2xl font-semibold text-center pt-5">Sample of questions asked</p>
                        <div className="flex justify-center space-x-3 asj-padding py-5">
                            <div className="flex w-1/3 font-extralight">
                                <em>What type of design are you looking for?</em>
                            </div>
                            <div className="flex w-1/3 font-extralight">
                                <em>Why do you use Craigslist?</em>
                            </div>
                            <div className="flex w-1/3 font-extralight">
                                <em>What color palette are you looking for?</em>
                            </div>
                        </div>
                        <div className="flex flex-col py-10">
                            <em className=" asj-padding">We established three trends after user interviews were conducted. </em>
                            <strong>1: 100% interviewees see Craigslist as one time usage or by need basis specifically furniture and expensive rare items. </strong>
                            <strong>2: Lack of information in postings caused concern for safety with making transactions.</strong>
                            <strong>3: 100% interviewees shared a concern for sustainability.</strong>
                        </div>
                    </div>
                </div>



                {/* Conceptual Development */}
                <div className="flex justify-center phone-padding flex-col items-center py-5">
                    <div className="asj-width-margin-reach flex justify-center flex-col items-center py-5">
                        <div className="flex flex-col py-5">
                            <h1 className="sub-header text-black asj-padding">Conceptual Development</h1>
                            <em className="asj-padding">
                                We needed to address either creating more confidence for buyers making purchases or to encourage Craigslist users to use the product consistently instead of one time usages.
                                Other redesigns either focused on modernizing the user interface or creating a user profile system to boost user credibility.
                                We felt that with time constraints and wanting to have a new approach, we decided to avoid focusing on user security. </em>
                            <em className="asj-padding">
                                Promoting user usage was more interesting to create instead of a detailed user profile because of common redesign for user profiles.
                                Funnily, we realized that using Pinterest for inspirations of user interfaces finalized our decision on our redesign.
                                Pinterest has a system of saving posts and creating mood boards. We thought that Craigslist could do it similarly while maintaining its primary function.
                            </em>
                        </div>
                        <div className="four-box grid grid-cols-2 gap-2 justify-items-center pb-5">
                            <div className='flex justify-center items-center flex-col'>
                                <Image
                                    src="/assets/clist-photos/cd-1.jpg"
                                    alt='Aaron sketch'
                                    width={400}
                                    height={400} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <Image
                                    src="/assets/clist-photos/cd-2.jpg"
                                    alt='Isaac sketch'
                                    width={400}
                                    height={400} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <Image
                                    src="/assets/clist-photos/cd-3.jpg"
                                    alt='Demetrius sketch'
                                    width={400}
                                    height={400} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <Image
                                    src="/assets/clist-photos/cd-4.jpg"
                                    alt='Janelle sketch'
                                    width={400}
                                    height={400} />
                            </div>
                        </div>
                        <div className="asj-padding text-center asj-img-title">
                            <p >Early Wireframe Ideas</p>
                        </div>
                        <div className="flex flex-col justify-between py-3 h-full">
                            <em className="py-3">
                                Since there wasn&rsquo;t a focus to on what exactly the mood board will do, these challenges were halting the process.
                                We had to refer back to our user interviews to narrow down the mood board&rsquo;s focus.</em>
                            <em className="py-3">
                                100% of our user interviewees have bought furniture from Craigslist to promote sustainability and to fill up space in their homes.
                                Our interviewees either didn&rsquo;t have time to build or afford brand new furniture items through major retailers. This sparked the idea of focusing entirely on interior design with only Craigslist products.
                            </em>
                            <em className="py-3">
                                I was tasked on creating the questionnaire pages of the product and prototyping the pages to go from one to another. Please refer below the
                            </em>
                        </div>

                        {/* Carousel */}
                        <div className="carousel-res pt-5  flex items-center justify-center">
                            <Image
                                // className="border 5px solid"
                                src={images1[selectedIndex1].src}
                                alt={images1[selectedIndex1].alt}
                                width={700}
                                height={400}
                            />
                        </div>
                        <div className="asj-padding  flex flex-row justify-center text-center py-5 caro-btns-res">
                            <button className="caro1-btn" onClick={handlePrev1}>&lt;</button>
                            <p className="flex flex-col font-semibold justify-center ">{images1[selectedIndex1].question}</p>
                            <button className="caro1-btn" onClick={handleNext1}>&gt;</button>
                        </div>
                    </div>
                </div>






                {/* Final Product & Development */}
                <div className="bg-[#cccccc] phone-padding w-full flex justify-center flex-col items-center">
                    <div className="asj-width-margin-reach  w-full flex justify-center flex-col  py-10">
                        <h1 className="sub-header text-black asj-padding">Final Product & Development</h1>
                        <div className="pb-1">
                            <em className="flex flex-col py-2 ">
                                Our instructor challenged each individual to take their converged prototype and redesign it with your own personal style.
                                Hearing this at first was a little daunting because I wasn&rsquo;t sure on how to change what we just made.
                                I decided to focus on what makes Craigslist what it is. Simple and functional but with a modern style current to our time.
                            </em>
                            <em className="flex flex-col asj-padding">
                                Minimalism was the first thing that stuck out to because it focuses on keeping things simple and utilizing white or negative space to create structure.
                                I created a style tile focused around minimalism because it is a style I personally enjoy and it would also maintain Craigslist&rsquo;s identity.
                            </em>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <Image
                                className="border 5px solid my-5"
                                src="/assets/clist-photos/clist-styletile.png"
                                alt='Craigslist Style Tile'
                                width={700}
                                height={400} />
                            <em className="flex flex-col asj-padding ">
                                Using this style tile sped up my process on redesigning what my team had previously into something I resonate with.
                                I had more confidence about becoming a UX designer since this iteration would be solely defined by me.
                                I wanted to display what I believed in with respect to my team&rsquo;s work when redesigning this iteration.
                            </em>
                        </div>
                        {/* Carousel 2 */}
                        <div className="carousel-res pt-5  flex items-center justify-center">
                            <Image
                                className="border 5px solid "
                                src={images2[selectedIndex2].src}
                                alt={images2[selectedIndex2].alt}
                                width={700}
                                height={400}
                            />
                        </div>
                        <div className="py-10 flex flex-row justify-center text-center caro-btns-res">
                            <button className="caro2-btn" onClick={handlePrev2}>&lt;</button>
                            <p className="flex flex-col justify-center  font-semibold ">{images2[selectedIndex2].question}</p>
                            <button className="caro2-btn" onClick={handleNext2}>&gt;</button>
                        </div>
                        <em className="flex flex-col py-2asj-padding">
                            I decided to scrap the budget question only because that would be limiting on all the potential items can be considered for the mood board but also not entirely necessary for our redesigns main task.
                            I decided to add descriptions associated with the items because it would boost user confidence on their choices by understanding the products more.
                            Finally I focused on using black to dictate space and white to accent the text for a more cohesive aesthetic. I wanted the text to stand out while being easy to read.
                        </em>
                    </div>
                </div>




                {/* Whats next */}
                <div className="flex justify-center phone-padding flex-col items-center py-5">
                    <div className="asj-width-margin-reach flex justify-center flex-col ">
                        <h1 className="sub-header pt-5 text-black asj-padding">What&rsquo;s Next</h1>
                        <em className="flex flex-col asj-padding ">
                            Overall executing a redesign based off user needs was an eye opening experience. Trying to create a redesign with other aspiring designers was difficult to manage.
                            If we had more time, I would have obtained more user data for product affirmation and modify features influenced by user testing.
                            Finding what patterns surface after observing our users execute tests of the product.
                            I would definitely add the ability to see the products&rsquo; info over a hover of the item and saving a specific item on the mood board before refreshing a new one.
                            We would have focused on the other issue our interviewees&rsquo; expressed with the security and validation of users in Craigslist if we had more time.
                        </em>
                        <em className="flex flex-col asj-padding ">
                            We would have conducted more interviews on what makes the user more comfortable to make a transaction.
                            We understood that security would lead to more confidence and user usage of the product. The mood board doesn&rsquo;t entirely solve the problem our users may have with their future purchases.
                        </em>
                        <div className="flex flex-col asj-padding">
                            <Link href="https://www.figma.com/proto/33UDTpUCByNJpE9FhnGdOT/Team-2-Converged-Prototype?page-id=55%3A218&node-id=55-457&scaling=min-zoom&starting-point-node-id=55%3A457" legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className="text-2xl bold underline py-5">Prototype Version 1</a>
                            </Link>
                            <Link href="https://www.figma.com/proto/EXS7vyz9N2XWODGzG3bjIU/High-Fidelity-Prototype?page-id=10%3A1263&node-id=10-1399&scaling=min-zoom&starting-point-node-id=10%3A1399" legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className="text-2xl bold underline py-5">Final Prototype</a>
                            </Link>
                        </div>
                    </div>
                </div>



            </div >
            <CraigFooter />
        </>
    )
}
