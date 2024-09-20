import Navbar from "@/components/Navbar";
import ReachFooter from "@/components/ReachFooter";
import Image from "next/image";
import Link from "next/link";


export default function reachPage() {
    return (
        <>
            <Navbar backgroundColor="bg-[#333333]" textColor="text-white" />
            <div className="flex flex-col min-h-screen">
                <div className="bg-[#333333]  mx-auto w-full">
                    <strong className='header-info italic text-white flex justify-center'>REACH Dashboard</strong>
                    <div className='flex justify-center fig-box'>
                        <Image
                            src="/assets/reach.png"
                            alt='box'
                            width={620}
                            height={600} />
                    </div>
                </div>
                <div className="flex-grow mx-auto w-4/5 asj-width-margin">
                    <div className="flex mt-5 justify-center">
                        <Image
                            className="reach-banner"
                            src="/assets/reach-banner.png"
                            alt='box'
                            width={620}
                            height={500} />

                    </div>
                    {/* Overview */}
                    <div className="asj-width-margin-reach flex justify-center flex-col res-margin-top">
                        <div>
                            <h1 className="sub-header text-black asj-padding ">Overview</h1>
                            <div className=" flex justify-center space-x-2 py-2">
                                <div className="flex flex-col w-1/3">
                                    <strong className="pb-5">Problem</strong>
                                    <p className="pr-5 reach-cols font-light">How to convince higher education organizations to invest in their REACH platform</p>
                                </div>
                                <div className="flex flex-col w-1/3">
                                    <strong className="pb-5">Goal</strong>
                                    <p className="reach-cols font-light">Understanding how higher education staff would provide support for their students</p>
                                </div>
                                <div className="flex flex-col w-1/3">
                                    <strong className="pb-5">Role</strong>
                                    <p className="reach-cols font-light">Split into teams of 5 <br /> My roles: UX Designer, Researcher, and Interviewer</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center flex-col res-margin-top">
                            {/* Research */}
                            <h1 className="sub-header text-black asj-padding ">Research</h1>
                            <div className="flex justify-center space-x-3 py-2 mb-5 asj-width-margin-reach ">
                                <div className="flex flex-col w-1/2">
                                    <strong className="pb-5 text-2xl">Amount of Interviews</strong>
                                    <ul className="list-disc italic pl-5 font-light">
                                        <li >Admission Recruiters 66%</li>
                                        <li>Communication Strategist 17%</li>
                                        <li>Students 17%</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col w-1/2">
                                    <strong className="pb-5 text-2xl">Target of Research</strong>
                                    <ul className="list-disc italic pl-5 font-light">
                                        <li>What is the competition doing?</li>
                                        <li>How do schools currently promote support to their students?</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <em className="flex flex-col asj-padding pb-10">
                                    Competition to Chicago Scholars REACH Program were nonexistent. Majority of products or applications that could compare mainly focused on making friends with their fellow students.
                                    Nothing has surfaced with a product that schools provide a central hub of support the schools provide on their campuses.
                                    This encouraged the team to focus on user interviews with students and staff with the lack of competition.
                                </em>
                                <strong className="text-2xl pt-5">Sample of questions asked</strong>
                            </div>
                            <div className="flex justify-center space-x-3 asj-padding pb-5 font-extralight">
                                <div className="flex w-1/3">
                                    {/* lower font for the 3  */}
                                    <em >What technologies are being used by staff?</em>
                                </div>
                                <div className="flex w-1/3">
                                    <em>How does the staff approach giving students support they need?</em>
                                </div>
                                <div className="flex w-1/3">
                                    <em>What is something they hope for to improve their tasks?</em>
                                </div>
                            </div>
                            <em className="bold text-2xl my-5"> We established three trends after user interviews were conducted:</em>
                            <div className="flex justify-center space-x-3 asj-padding font-extralight">
                                <div className="flex flex-col w-1/3">
                                    <em>1: Students wanting more variety in scheduling or availability in career building workshops.</em>
                                </div>
                                <div className="flex flex-col w-1/3">
                                    <em>2: 100% of higher education staff desire to lower student retention and increase a sense of belonging within campus.</em>
                                </div>
                                <div className="flex flex-col w-1/3">
                                    <em>3: Higher education departments do not have one place where they can freely share and communicate information amongst each other.</em>
                                </div>
                            </div>
                        </div>
                        <div className="asj-padding">
                            {/* Conceptual Development */}
                            <h1 className="sub-header text-black asj-padding">Conceptual Development</h1>
                            <div className="flex justify-center">
                                <Image
                                    src="/assets/fariene.png"
                                    alt='box'
                                    width={300}
                                    height={300} />
                            </div>
                            <br />
                            <strong className="text-2xl italic">&rdquo;I want to arm students with the tools they need to succeed. I don&rsquo;t believe in gatekeeping.
                                I don&rsquo;t believe school should be a survival of the fittest situation.&rdquo; <span>- Fareine Suarez </span></strong>
                            <div className="flex flex-col justify-between asj-padding h-full">
                                <em className="asj-padding">
                                    Fiona Madison, a student recruitment manager, needs a system to visualize students&rsquo; college journey and on-campus involvement so that she can create workshops and connections to promote student success and retention.
                                </em>
                                <em className="asj-padding">
                                    Fiona was inspired by Fareine Suarez&rsquo;s college admission recruiter for Illinois Institute of Technology, quote and dedication for every student to have equal chances for success.
                                    Other interviewees also shared equal motivation of providing every tool necessary for students to succeed academically and personally.
                                    Higher education staff persona was a unanimous decision from the team because majority (83%) of our interviewees shared that similar profession.
                                </em>
                                <div className="max-w-2xl mx-auto px-4">
                                    <strong className="flex justify-center text-black bold text-2xl asj-padding">Common trend that appeared from the team</strong>
                                    <div className="flex justify-center space-x-3 asj-padding">
                                        <em className="mr-4 font-extralight">
                                            &rdquo;Live feed&rdquo; concept that focuses on either career development or mental health support
                                        </em>
                                        <em className="mb-4 font-extralight">
                                            Issue with the idea was that the scope was either too broad or does not fully solve our problems
                                        </em>
                                    </div>
                                    <strong className="flex justify-center text-black bold text-2xl asj-padding">Solution</strong>
                                    <em >
                                        A dashboard because it can also include a live feed while having more opportunity to have more features. We all agreed a dashboard felt the most appropriate solution because it allows customization with relation to the users liking.
                                        I suggested that the team perform a 6-8-5 sketching exercise for more concrete discovery on the product.
                                    </em>
                                </div>
                            </div>
                            <div className="four-box grid grid-cols-2 gap-2 justify-items-center  pb-5">
                                <div className='flex justify-center items-center flex-col'>
                                    <strong className="py-4 text-[16px] text-center ">Aaron</strong>
                                    <Image
                                        src="/assets/asj-sketch.png"
                                        alt='Aaron sketch'
                                        width={300}
                                        height={400} />
                                </div>
                                <div className='flex justify-center items-center flex-col'>
                                    <strong className="py-4 text-[16px] text-center">Isaac</strong>
                                    <Image
                                        src="/assets/isaac-sketch.png"
                                        alt='Isaac sketch'
                                        width={300}
                                        height={400} />
                                </div>
                                <div className='flex justify-center items-center flex-col'>
                                    <strong className="py-4 text-[16px] text-center">Demetrius</strong>
                                    <Image
                                        src="/assets/dem-sketch.png"
                                        alt='Demetrius sketch'
                                        width={300}
                                        height={400} />
                                </div>
                                <div className='flex justify-center items-center flex-col'>
                                    <strong className="py-4 text-[16px] text-center">Janelle</strong>
                                    <Image
                                        src="/assets/jan-sketch.png"
                                        alt='Janelle sketch'
                                        width={300}
                                        height={400} />
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* Final Product & Development */}
                            <h1 className="sub-header text-black asj-padding">Final Product & Development</h1>
                            <em className="mb-4 ">
                                Our ideas were fully converging amongst each other with a common theme of cards displaying student information.
                                The cards of the students would be the first component that captures Fiona&rsquo;s attention immediately when accessing the dashboard
                            </em>
                            {/* First Card */}
                            <div className='flex justify-center items-center flex-col pt-10 pb-5'>
                                <Image
                                    src="/assets/activity-card.png"
                                    alt='activity card'
                                    width={400}
                                    height={400} />
                                <p className="py-3 text-center font-semibold italic ">First Example Card</p>
                            </div>
                            <em className="asj-padding">
                                Our first iteration created above by Issac opened our teams&rsquo; eyes on what can be possible with our cards. A mood meter indicating whether students needed attention or assistance during their higher education journey was absolutely brilliant.
                                The card felt crowded and the information presented had redundancy and was overwhelming.
                                We felt that &rdquo;less was more&rdquo; would appropriately fit Fiona&rsquo;s needs with her busy schedule.
                            </em>
                            {/* Final Card */}
                            <div className='flex justify-center items-center flex-col pt-10 pb-5'>
                                <Image
                                    src="/assets/final-act-card.png"
                                    alt='final card'
                                    width={400}
                                    height={400} />
                                <p className="py-3 text-center font-semibold italic">Final Example Card</p>
                            </div>
                            <em className="asj-padding">
                                I decided to modify Isaac&rsquo;s card to have more structure and negative space so the card can be viewed easily by Fiona.
                                I decided to group related content into their own lines/categories for consistent and clean look.
                            </em>
                            {/* Final Dashboard */}
                            <div className='flex justify-center items-center flex-col pt-10 pb-5'>
                                <Image
                                    src="/assets/dashboard.png"
                                    alt='final dash'
                                    width={600}
                                    height={400} />
                                <p className="py-3 italic font-semibold text-center">Final Product of Dashboard</p>
                            </div>
                            <em className="asj-padding">
                                We used a Z pattern to ultimately decide where we would place components of the dashboard for Fiona. We kept in mind her desire to create workshops.
                                Seeing how her students mood status is first allows us to strategically place our following components to what Fiona may find important after seeing her students&rsquo; information.
                                We realized that having a &rdquo;Less is more&rdquo; student card is only appropriate if there was another page showing in depth details about the students as well.
                            </em>
                            {/* Notes */}
                            <div className='flex justify-center items-center flex-col asj-padding'>
                                <Image
                                    className="border 5px solid asj-padding"
                                    src="/assets/notes.png"
                                    alt='final dash'
                                    width={600}
                                    height={400} />
                                <em className="py-10">
                                    The main components we wanted to focus for the student profile was the live feed and REACH engagement section.
                                    The live feed was important because it shows a centralized place for all departments to comment about a student.
                                    It was an initial idea we all resonated with in our early discussions about a solution. We felt that we needed to revisit that in another page.
                                </em>
                                {/* Fix spacing between here
                                 */}
                            </div>
                            {/* Engagement */}
                            <div className='flex justify-center items-center flex-col asj-padding'>
                                <Image
                                    className="border 5px solid asj-padding"
                                    src="/assets/engagement.png"
                                    alt='final dash'
                                    width={600}
                                    height={400} />
                                <em className="asj-padding">
                                    Higher education staff ability to visualize students&rsquo; interactions with their gamification space on REACH was a must have on this page.
                                    We wanted to add this component fulfill our client&rsquo;s needs while considering what the staff involvement and expectations with REACH.
                                    Seeing the value they bring on their student is something Fiona needs to see that their investment into REACH is satisfactory.
                                </em>
                            </div>
                            {/* Final Profile */}
                            <div className='flex justify-center items-center flex-col pt-10 pb-5'>
                                <Image
                                    src="/assets/sdnt-profile.png"
                                    alt='final dash'
                                    width={600}
                                    height={400} />
                                <p className="py-3 asj-img-title text-center">Final Product of Student Profile</p>
                            </div>
                        </div>
                        {/* Whats next */}
                        <div className="pt-5 pb-10">
                            <h1 className="sub-header text-black pb-5">What&rsquo;s Next</h1>
                            <em>
                                The client loved our idea and was thankful on how it opened their eyes for new possibilities and who to communicate with to further advance our solution.
                                We were aware that there was more we could have done if we had more time.
                                <br />
                                <br />
                                One of the first steps we would take would be to perform more user interviews.
                                We had a limited interviewee base to further discoveries and validations of our design. We can merely speculate on what we thought the user needs were with our persona Fiona.
                                We would have hoped to discover what we were missing and did right in order to create an impact with our design.
                                <br />
                                <br />
                                Finally we would have focused on the students and generate a dashboard specifically for them.
                                We mainly focused on our higher education user base because our client resonated with our problem statement stated earlier with Fiona.
                                Knowing what benefits the students would in turn benefit the higher education staff. It would give us more clarity on what components they should have with relation to the students.
                            </em>
                        </div>
                    </div>
                </div >
                <ReachFooter />
            </div >
        </>
    );
}