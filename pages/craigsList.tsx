import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from 'react';

export default function CraigsList() {
    const [selectedIndex1, setSelectedIndex1] = useState(0);
    const [selectedIndex2, setSelectedIndex2] = useState(0);

    const images1 = [
        { src: '/assets/clist-photos/caro1.jpg', alt: 'choose int design', question: 'Question 1' },
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
        <div>
            <Navbar />
            <div className="bg-black shadow-md mx-auto w-full">
                <em className='header-info text-white flex justify-center'>Craigslist Moodboard</em>
                <div className='flex justify-center fig-box'>
                    <Image
                        src="/assets/clist-photos/craig-logo.jpg"
                        alt='box'
                        width={610}
                        height={500} />
                </div>
            </div>
            <div className="flex-grow mx-auto w-4/5 max-w-5xl">
                <div className="flex justify-center mt-5">
                    <Image
                        className="img-border"
                        src="/assets/clist-photos/main-banner.jpg"
                        alt='box'
                        width={610}
                        height={500} />
                </div>
                {/* Overview - */}
                <div className="asj-width-margin mx-auto px-4">
                    <div>
                        <h1 className="sub-header text-black asj-padding">Overview</h1>
                        <div className="flex justify-center space-x-3 py-2">
                            <div className="flex flex-col w-1/3">
                                <p className="pb-5 text-2xl">Problem</p>
                                <em className="pr-5">How and why would you redesign Craigslist&rsquo;s user interface?</em>
                            </div>
                            <div className="flex flex-col w-1/3">
                                <p className="pb-5 text-2xl">Goal</p>
                                <em>Conduct user interviews to support your redesign while utilizing the basics of UI/UX principles.</em>
                            </div>
                            <div className="flex flex-col w-1/3">
                                <p className="pb-5 text-2xl">Role</p>
                                <em>Split into teams of 3</em>
                                <em>My roles: UX Designer, Researcher, and Interviewer</em>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Research */}
                        <h1 className="sub-header text-black asj-padding">Research</h1>
                        <div className="flex justify-center space-x-3 py-2 mb-5">
                            <div className="flex flex-col w-1/2">
                                <p className="pb-5 text-2xl">Amount of Interviews</p>
                                <ul className="list-disc italic pl-5">
                                    <li>Friends and Family 60%</li>
                                    <li>Coworkers 40%</li>
                                </ul>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <p className="pb-5 text-2xl">Target of Research</p>
                                <ul className="list-disc italic pl-5">
                                    <li>How does Craigslist still maintain its user base?</li>
                                    <li>Why do people use Craigslist over its competition?</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <em className="flex flex-col asj-paddingasj-padding">
                                Craigslist has fierce competition on what it does well especially from Facebook Marketplace and Trovit.
                                They use a modern design for clearer accessibility and navigation through pages compared to Craigslist.
                                They also have profile customization to support a more comfortable and marketable experience.
                            </em>
                            <em className="flex flex-col asj-paddingasj-padding">
                                Craigslist does have a bad reputation of scams or endangerment due to the users being anonymous.
                                There also isn&rsquo;t a system that proves the credibility of the product and user.
                                Craigslist still has frequent usage because users accomplishing their purpose on the site is still easy despite the potential dangers.
                                My team decided that interviews were required to fully develop empathy for our redesign.
                            </em>
                            <p className="text-2xl pt-5">Sample of questions asked</p>
                        </div>
                        <div className="flex justify-center space-x-3 asj-padding">
                            <div className="flex w-1/3">
                                <em>How often do you use Craigslist?</em>
                            </div>
                            <div className="flex w-1/3">
                                <em>Describe a transaction where you had uncertainty when using Craigslist</em>
                            </div>
                            <div className="flex w-1/3">
                                <em>What positive experiences did you have with Craigslist</em>
                            </div>
                        </div>
                        <em className=" asj-padding"> We discovered that 100% of the interviewees see Craigslist as one time usage or need by basis.
                            Those usages were related to purchasing furniture and rare items that are too expensive to obtain through normal channels.
                            They also were concerned with Craigslist not being completely safe to make transactions.
                            If there were a lack of information in a posting, they would turn it away.
                            Amazingly all of interviewees shared a concern for sustainability.</em>
                    </div>
                    <div>
                        {/* Conceptual Development */}
                        <div className="flex flex-col justify-between asj-padding h-full">
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
                        <div className="asj-padding text-center">
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
                    </div>
                    <h1 className="text-2xl asj-padding">Questions Created</h1>
                    <div className="flex justify-center space-x-3 asj-padding">
                        <div className="flex w-1/3">
                            <em>What furniture would you like? What is the budget?</em>
                        </div>
                        <div className="flex w-1/3">
                            <em>What type of design you looking for?</em>
                        </div>
                        <div className="flex w-1/3">
                            <em>What color palette are you looking for?</em>
                        </div>
                    </div>
                    <div className="asj-padding">
                        <em >
                            I choose these questions because these questions commonly came from the team.
                            These converged thoughts affirmed us that these will be asked when it comes developing a mood board.
                            I believed narrowing down the users&rsquo; choices on what they want would increase their confidence on selecting products from Craigslist.
                            These findings made the early redesign go smoothly. Please refer to low fidelity project my team I created below
                        </em>
                    </div>
                    {/* Carousel */}
                    <div className="carousel1 pt-5  flex items-center justify-center">
                        <Image
                            // className="border 5px solid"
                            src={images1[selectedIndex1].src}
                            alt={images1[selectedIndex1].alt}
                            width={700}
                            height={400}
                        />
                    </div>
                    <div className="asj-padding  flex flex-row justify-center text-center">
                        <button className="caro1-btn" onClick={handlePrev1}>&lt;</button>
                        <p className="flex flex-col justify-center">{images1[selectedIndex1].question}</p>
                        <button className="caro1-btn" onClick={handleNext1}>&gt;</button>
                    </div>

                    {/* Final Product & Development */}
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
                            className="border 5px solid mb-8"
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
                    <div className="carousel1 pt-8  flex items-center justify-center">
                        <Image
                            className="border 5px solid "
                            src={images2[selectedIndex2].src}
                            alt={images2[selectedIndex2].alt}
                            width={700}
                            height={400}
                        />
                    </div>
                    <div className="py-5 flex flex-row justify-center text-center">
                        <button className="caro2-btn" onClick={handlePrev2}>&lt;</button>
                        <p className="flex flex-col justify-center">{images2[selectedIndex2].question}</p>
                        <button className="caro2-btn" onClick={handleNext2}>&gt;</button>
                    </div>
                    <em className="flex flex-col py-2asj-padding">
                        I decided to scrap the budget question only because that would be limiting on all the potential items can be considered for the mood board but also not entirely necessary for our redesigns main task.
                        I decided to add descriptions associated with the items because it would boost user confidence on their choices by understanding the products more.
                        Finally I focused on using black to dictate space and white to accent the text for a more cohesive aesthetic. I wanted the text to stand out while being easy to read.
                    </em>

                    {/* Whats next */}
                    <div className=" pb-5">
                        <h1 className="sub-header text-black asj-padding">What&rsquo;s Next</h1>
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
                                <a target="_blank" rel="noopener noreferrer" className="text-2xl bold underline pb-5">Prototype Version 1</a>
                            </Link>
                            <Link href="https://www.figma.com/proto/EXS7vyz9N2XWODGzG3bjIU/High-Fidelity-Prototype?page-id=10%3A1263&node-id=10-1399&scaling=min-zoom&starting-point-node-id=10%3A1399" legacyBehavior>
                                <a target="_blank" rel="noopener noreferrer" className="text-2xl bold underline">Final Prototype</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}
