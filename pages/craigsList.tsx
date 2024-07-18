import Navbar from "@/components/Navbar";
import ReachFooter from "@/components/ReachFooter";
import Image from "next/image";
import Link from "next/link";

export default function craigsList() {
    return (
        <div>
            <Navbar />
            <div className="bg-black shadow-md mx-auto w-full">
                <em className='header-info text-white flex justify-center'>Craigslist Moodboard</em>
                <div className='flex justify-center fig-box'>
                    <Image
                        src="/assets/clist-photos/craig-logo.jpg"
                        alt='box'
                        width={600}
                        height={500} />
                </div>
            </div>
            <div className="flex-grow mx-auto w-4/5 max-w-5xl">
                <div className="flex justify-center">
                    <Image
                        src="/assets/clist-photos/main-banner.jpg"
                        alt='box'
                        width={700}
                        height={500} />
                </div>
                {/* Overview - Adjust width here */}
                <div className="max-w-3xl mx-auto px-4">
                    <div>
                        <h1 className="sub-header text-black py-8">Overview</h1>
                        <div className="flex justify-center space-x-3 py-2">
                            <div className="flex flex-col w-1/3">
                                <em className="pb-5">Problem</em>
                                <p className="pr-5">How and why would you redesign Craigslist&rsquo;s user interface?</p>
                            </div>
                            <div className="flex flex-col w-1/3">
                                <em className="pb-5">Goal</em>
                                <p>Conduct user interviews to support your redesign while utilizing the basics of UI/UX principles.</p>
                            </div>
                            <div className="flex flex-col w-1/3">
                                <em className="pb-5">Role</em>
                                <p>Split into teams of 3</p>
                                <p>My roles: UX Designer, Researcher, and Interviewer</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* Research */}
                        <h1 className="sub-header text-black py-8">Research</h1>
                        <div className="flex justify-center space-x-3 py-2 mb-5">
                            <div className="flex flex-col w-1/2">
                                <strong className="pb-5 text-2xl">Amount of Interviews</strong>
                                <ul className="list-disc italic pl-5">
                                    <li>Friends and Family 60%</li>
                                    <li>Coworkers 40%</li>
                                </ul>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <strong className="pb-5 text-2xl">Target of Research</strong>
                                <ul className="list-disc italic pl-5">
                                    <li>How does Craigslist still maintain its user base?</li>
                                    <li>Why do people use Craigslist over its competition?</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <em className="flex flex-col py-5 pb-10">
                                Craigslist has fierce competition on what it does well especially from Facebook Marketplace and Trovit.
                                They use a modern design for clearer accessibility and navigation through pages compared to Craigslist.
                                They also have profile customization to support a more comfortable and marketable experience.
                            </em>
                            <em className="flex flex-col py-5 pb-10">
                                Craigslist does have a bad reputation of scams or endangerment due to the users being anonymous.
                                There also isn&rsquo;t a system that proves the credibility of the product and user.
                                Craigslist still has frequent usage because users accomplishing their purpose on the site is still easy despite the potential dangers.
                                My team decided that interviews were required to fully develop empathy for our redesign.
                            </em>
                            <strong className="text-2xl pt-5">Sample of questions asked</strong>
                        </div>
                        <div className="flex justify-center space-x-3 py-5 pb-10">
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
                        <em className=" mt-5"> We discovered that 100% of the interviewees see Craigslist as one time usage or need by basis.
                            Those usages were related to purchasing furniture and rare items that are too expensive to obtain through normal channels.
                            They also were concerned with Craigslist not being completely safe to make transactions.
                            If there were a lack of information in a posting, they would turn it away.
                            Amazingly all of interviewees shared a concern for sustainability.</em>
                    </div>
                    <div>
                        {/* Conceptual Development */}
                        <div className="flex flex-col justify-between py-5 h-full">
                            <h1 className="sub-header text-black py-5">Conceptual Development</h1>
                            <em className="py-5">
                                We needed to address either creating more confidence for buyers making purchases or to encourage Craigslist users to use the product consistently instead of one time usages.
                                Other redesigns either focused on modernizing the user interface or creating a user profile system to boost user credibility.
                                We felt that with time constraints and wanting to have a new approach, we decided to avoid focusing on user security. </em>
                            <em className="py-5">
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
                        <div className="py-4 text-center">
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
                    <h1 className="text-2xl py-5">Questions Created</h1>
                    <div className="flex justify-center space-x-3 py-5">
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
                    <div className="py-5">
                        <em >
                            I choose these questions because these questions commonly came from the team.
                            These converged thoughts affirmed us that these will be asked when it comes developing a mood board.
                            I believed narrowing down the users&rsquo; choices on what they want would increase their confidence on selecting products from Craigslist.
                            These findings made the early redesign go smoothly. Please refer to low fidelity project my team I created below
                        </em>
                    </div>
                </div>
            </div>
            <ReachFooter />
        </div >
    )
}