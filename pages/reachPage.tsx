import Navbar from "@/components/Navbar";
import ReachFooter from "@/components/ReachFooter";
import Image from "next/image";
import Link from "next/link";


export default function reachPage() {
    return (
        <>
            <Navbar backgroundColor="bg-[#333333]" textColor="text-white" />
            <div className="flex flex-col min-h-screen">

                {/* Header */}
                <div className="bg-[#333333]  mx-auto w-full">
                    <strong className='reach-info text-4xl italic text-white flex justify-center'>REACH Dashboard</strong>
                    <div className='flex justify-center fig-box'>
                        <Image
                            src="/assets/dashboard.png"
                            alt='box'
                            width={620}
                            height={600} />
                    </div>
                </div>


                {/* Overview */}
                <div className="flex-grow  flex justify-center flex-col res-margin-top">
                    <div className="bg-[#cccccc] mx-auto phone-padding w-full  flex justify-center flex-col items-center">
                        <div className="asj-width-margin-reach flex justify-center flex-col w-full ">
                            <div className="py-5">
                                <h1 className="sub-header  text-black asj-padding">Overview</h1>
                                <p className="pr-5 reach-cols font-light">
                                    Coding dojo bootcamp cohort were tasked to create and collaborate a hypothetical product with Chicago Scholars REACH.
                                    We were given two months to conduct research, interviews with Chicago Scholars networking schools,
                                    and to present our product to the Chicago Scholars REACH board.
                                </p>
                            </div>
                            <div className="flex justify-center flex-col py-5">
                                <div className="flex flex-col text-center">
                                    <strong className="py-5 underline text-3xl"> What is the problem?</strong>
                                    <p className="pr-5 reach-cols text-2xl font-light">
                                        Higher education organizations are not investing in their REACH Platform.
                                    </p>
                                </div>
                                <div className="py-5">
                                    <h1 className="sub-header text-black py-5">What is REACH?</h1>
                                    <p className="pr-5 reach-cols font-light">
                                        REACH is a college and career pathway of the nexus of companies and communities.
                                        Reach is a virtual world where students can REACH mentors, jobs, guidance, and community at their fingertips.
                                        Less like schoolwork and more like a video game, REACH provides fun and rewarding pathways to college and career.
                                    </p>
                                </div>
                                <div className='flex justify-center py-5 fig-box'>
                                    <Image
                                        src="/assets/reach-banner.png"
                                        alt='box'
                                        width={620}
                                        height={600} />
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Goal/Role */}
                    <div className="phone-padding flex justify-center flex-col items-center py-5">
                        <div className="asj-width-margin-reach flex justify-center flex-col items-center py-5">
                            {/* inconsistency - should these be all caps? */}
                            <h1 className="sub-header text-black py-5">THE GOAL</h1>
                            <p className="font-light text-center text-2xl">Improve how higher education staff can provide support for their students.</p>
                        </div>
                        <div className="asj-width-margin-reach flex justify-center flex-col  py-5">
                            <h1 className="sub-header text-black py-5">THE SOLUTION AND IMPACT </h1>
                            <p className="font-light ">A dashboard that provides functionality and features to assist staff with providing purposeful support to their students and this is the result we made.</p>
                        </div>
                        <div className="asj-width-margin-reach flex justify-center flex-col pt-10 py-5">
                            {/* should this sub-header be all caps? */}
                            <h1 className="sub-header text-left text-black">My Role</h1>
                            <p className="font-light  pt-5">I led the conduction of interviews, designer meetings, and research for the first month of the project. I collaborated with two other designers in the research and interviews.</p>
                            <br />
                            <p className="font-light ">I led the final visual designs for the dashboard and designer meetings after three more designers were added into our team for the second month of the project.</p>
                        </div>
                    </div>



                    {/* Research */}
                    <div className="bg-[#cccccc] phone-padding w-full flex justify-center flex-col items-center">
                        <div className="asj-width-margin-reach  w-full flex justify-center flex-col  py-5">
                            <h1 className="sub-header text-black asj-padding ">Research</h1>
                            <em className="flex flex-col asj-padding">
                                Competition to Chicago Scholars REACH Program were nonexistent. Majority of products or applications that could compare mainly focused on making friends with their fellow students.
                                Nothing has surfaced with a product that schools provide a central hub of support the schools provide on their campuses.
                                This encouraged the team to focus on user interviews with students and staff with the lack of competition.
                            </em>
                        </div>
                        <div className="flex justify-center space-x-3 py-5 asj-width-margin-reach ">
                            <div className="flex flex-col w-1/2">
                                <strong className="pb-5 text-2xl">Interviews(6):</strong>
                                <ul className="list-disc italic pl-5 font-light">
                                    <li >Admission Recruiters 66%</li>
                                    <li>Communication Strategist 17%</li>
                                    <li>Students 17%</li>
                                </ul>
                            </div>
                            <div className="flex flex-col w-1/2">
                                <strong className="pb-5 text-2xl">Goals:</strong>
                                <ul className="list-disc italic pl-5 font-light">
                                    <li>What is the competition doing?</li>
                                    <li>How do schools currently promote support to their students?</li>
                                </ul>
                            </div>
                        </div>
                        <div className="asj-width-margin-reach flex justify-center flex-col py-5">
                            <strong className="text-2xl py-5 italic text-center">Sample of questions asked</strong>
                            <div className="flex questions-res flex-row">
                                <div className="flex w-1/2">
                                    <em >What technologies are being used by staff?</em>
                                </div>
                                <div className="flex w-1/2">
                                    <em>How does the staff approach giving students support they need?</em>
                                </div>
                                <div className="flex w-1/2">
                                    <em>What is something they hope for to improve their tasks?</em>
                                </div>
                            </div>
                        </div>
                        <div className="asj-width-margin-reach flex justify-center flex-col py-5">
                            <em className="text-center font-light py-5"> We established three trends after user interviews were conducted:</em>
                            <div className="asj-width-margin-reach flex flex-col">
                                <div className="flex py-2 font-semibold">
                                    <em>1: Students wanting more variety in scheduling or availability in career building workshops.</em>
                                </div>
                                <div className="flex py-2 font-semibold">
                                    <em>2: 100% of higher education staff desire to lower student retention and increase a sense of belonging within campus.</em>
                                </div>
                                <div className="flex py-2 font-semibold">
                                    <em>3: Higher education departments do not have one place where they can freely share and communicate information amongst each other.</em>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Conceptual Development */}
                    <div className="phone-padding flex justify-center flex-col items-center pt-5">
                        <div className="asj-width-margin-reach py-5">
                            <h1 className="sub-header text-black text-left ">Conceptual Development</h1>
                            <div className="flex justify-center py-10">
                                <Image
                                    src="/assets/fariene.png"
                                    alt='box'
                                    width={300}
                                    height={300} />
                            </div>
                            <p className="text-2xl py-5  italic">&rdquo;I want to arm students with the tools they need to succeed. I don&rsquo;t believe in gatekeeping.
                                I don&rsquo;t believe school should be a survival of the fittest situation.&rdquo; <span className="font-semibold">- Fareine Suarez </span></p>
                        </div>

                        <div className="asj-width-margin-reach flex flex-col">
                            <em className="font-light italic">
                                Fiona Madison, a student recruitment manager, needs a system to visualize students&rsquo; college journey and on-campus involvement so that she can create workshops and connections to promote student success and retention.
                            </em>
                            <br />
                            <em className="font-light italic">
                                Fiona was inspired by Fareine Suarez&rsquo;s college admission recruiter for Illinois Institute of Technology, quote and dedication for every student to have equal chances for success.
                                Other interviewees also shared equal motivation of providing every tool necessary for students to succeed academically and personally.
                                Higher education staff persona was a unanimous decision from the team because majority (83%) of our interviewees shared that similar profession.
                            </em>
                            <br />
                            <em className="font-light italic">
                                What can solve Fiona&rsquo;s problem? I suggested that we use a dashboard because it could be filled and organized with any feature Fiona would need. We all agreed a dashboard felt the most appropriate solution because it allows customization with relation to the users liking. I suggested that the team perform a 6-8-5 Sketching exercise for more concrete discovery on the product.
                            </em>
                        </div>
                        {/* 4 images  */}
                        <div className="four-box grid grid-cols-2 gap-2 justify-items-center  pb-5">
                            <div className='flex justify-center items-center flex-col'>
                                <p className="py-4 text-[16px] font-light text-center ">Aaron</p>
                                <Image
                                    src="/assets/asj-sketch.png"
                                    alt='Aaron sketch'
                                    width={315}
                                    height={400} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <p className="py-4 text-[16px] font-light text-center">Isaac</p>
                                <Image
                                    src="/assets/isaac-sketch.png"
                                    alt='Isaac sketch'
                                    width={300}
                                    height={400} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <p className="py-4 text-[16px] font-light text-center">Demetrius</p>
                                <Image
                                    src="/assets/dem-sketch.png"
                                    alt='Demetrius sketch'
                                    width={300}
                                    height={400} />
                            </div>
                            <div className='flex justify-center items-center flex-col'>
                                <p className="py-4 text-[16px] font-light text-center">Janelle</p>
                                <Image
                                    src="/assets/jan-sketch.png"
                                    alt='Janelle sketch'
                                    width={300}
                                    height={400} />
                            </div>
                        </div>
                    </div>




                    {/* Final Product & Development */}
                    <div className="bg-[#cccccc] phone-padding w-full flex justify-center flex-col items-center py-5">
                        <div className="asj-width-margin-reach flex justify-center flex-col py-5">
                            <h1 className="sub-header text-black asj-padding pb-5">Final Product & Development</h1>
                            <em className="mb-5 ">
                                It was obvious with our sketches that cards were a focal point on the dashboard. The first iteration of the card was constructed by our team member Issac. I felt the card was crowded and the information presented redundancy. I changed the card to have less features and consistent structure.
                            </em>
                            <em>
                                I decided to combine several buttons on the bottom because their functions were going to same place. I decided to locate students&rsquo; class year and major on the top right to perfectly line up with the name for it to be scannable. I made the fonts larger for identifying and important information so it doesn&rsquo;t go unnoticed.
                            </em>
                        </div>
                        {/* Cards */}
                        <div className="flex flex-row py-10">
                            <div className='flex justify-center items-center flex-col pr-5'>
                                <Image
                                    src="/assets/activity-card.png"
                                    alt='activity card'
                                    width={250}
                                    height={300} />
                                <p className="py-3 text-center font-semibold italic ">Before</p>
                            </div>

                            <div className='flex justify-center items-center flex-col pl-5'>
                                <Image
                                    src="/assets/final-act-card.png"
                                    alt='final card'
                                    width={285}
                                    height={300} />
                                <p className="py-3 text-center font-semibold italic">Final </p>
                            </div>
                        </div>
                        <em className="asj-width-margin-reach flex justify-center py-5">
                            I suggested using a Z pattern on ordering the components of the dashboard. Cards being at the very top highlights what our users would see and interact with first. We followed up the cards because of Fiona&rsquo;s desire to create workshops. We decided to add specific data to show records of the users&rsquo; efforts and to keep track of their progress. Finally having visual graphs at the end just in case Fiona needs to look at her students at a broader level.
                        </em>
                        {/* Final Dashboard */}
                        <div className='asj-width-margin-reach flex justify-center items-center flex-col py-5'>
                            <Image
                                src="/assets/dashboard.png"
                                alt='final dash'
                                width={600}
                                height={400} />
                            <p className="py-5 italic font-semibold text-center">Final Dashboard</p>
                            <em className="asj-padding ">
                                After finishing the initial dashboard, I encouraged our team to create a student profile page because we had the extra time and it will assist us on further questions that could come up in our presentation.
                            </em>
                        </div>
                        {/* Engagement */}
                        <div className='asj-width-margin-reach flex justify-center items-center flex-col '>
                            <Image
                                className="asj-padding"
                                src="/assets/engagement.png"
                                alt='final dash'
                                width={600}
                                height={400} />
                            <em className="asj-padding pt-5">
                                I contributed on adding the feature of showing letter grades for students engagement with the REACH platform. Tying in the business owner&rsquo;s product into the student profile felt necessary. It shows the client how they can check in on their students within the virtual reality. Potentially giving a tangible reason for investing into REACH.
                            </em>
                            <em className="asj-padding">
                                I also decided the structure and spacing for the student profile. I wanted information to have enough space to be scanned and completely visualized with quality information.
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
                    <div className="phone-padding flex justify-center flex-col items-center py-5">
                        <div className="asj-width-margin-reach flex justify-center flex-col py-5">
                            <h1 className="sub-header text-left text-black pb-5">What&rsquo;s Next</h1>
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
                </div>
            </div >
            <ReachFooter />
        </>
    );
}