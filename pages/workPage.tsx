import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";


export default function workPage() {
    return (
        <div>
            <Navbar />
            {/* Header info */}
            <div className="bg-black shadow-md mx-auto" style={{ width: '100%', maxWidth: 'auto', height: 'auto' }}>
                <em className='header-info text-white flex justify-center'>REACH Dashboard</em>
                <div className='flex justify-center fig-box'>
                    <Image
                        src="/assets/reach.png"
                        alt='box'
                        width={600}
                        height={600} />
                </div>
            </div>
            {/* Main Body */}
            <main className="mx-auto" style={{ width: '70%', maxWidth: '1200px', height: '500px' }} >
                <div className="flex justify-center">
                    <Image
                        src="/assets/reach-banner.png"
                        alt='box'
                        width={800}
                        height={500} />
                </div>
                {/* Main */}
                <div className="max-w-7xl mx-auto ">
                    {/* Overview */}
                    <h1 className="sub-header text-black pb-5">Overview</h1>
                    <div className="flex justify-center space-x-3 py-10 " >
                        <div className="flex-col w-1/3">
                            <em>Problem</em>
                            <p className="pr-5">How to convince higher education organizations to invest into their REACH platform</p>
                        </div>
                        <div className="flex-col w-1/3">
                            <em>Goal</em>
                            <p>Understanding how higher education staff would provide support for their students</p>
                        </div>
                        <div className="flex-col w-1/3">
                            <em>Role</em>
                            <p>Split into teams of 5</p>
                            <p>My roles: UX Designer, Researcher, and Interviewer</p>
                        </div>
                    </div>
                    {/* Research */}
                    <h1 className="sub-header text-black pb-5">Research</h1>
                    <div className="flex justify-center space-x-3 py-10 " >
                        <div className="flex-col w-1/2">
                            <em>Amount of Interviews</em>
                            <li>Admission Recruiters 66%</li>
                            <li>Communication Strategist 17%</li>
                            <li>Students 17%</li>
                        </div>
                        <div className="flex-col w-1/2">
                            <em>Amount of Interviews</em>
                            <li>What is the competition doing?</li>
                            <li>How do schools currently promote support to their students?</li>
                        </div>
                    </div>
                    <em>Competition to Chicago Scholars REACH Program were nonexistent. Majority of products or applications that could compare mainly focused on making friends with their fellow students.
                        Nothing has surfaced with a product that schools provide a central hub of support the schools provide on their campuses.
                        This encouraged the team to focus on user interviews with students and staff with the lack of competition.
                    </em>
                    <strong>Sample of questions asked</strong>
                    <div className="flex justify-center space-x-3 py-10 " >
                        <div className="flex-col w-1/3">
                            <em>What technologies are being used by staff</em>
                        </div>
                        <div className="flex-col w-1/3">
                            <em>How does the staff approach giving students support they need?</em>
                        </div>
                        <div className="flex-col w-1/3">
                            <em>What is something they hope for to improve their tasks?</em>
                        </div>
                    </div>
                    <em> We established three trends after user interviews were conducted.
                        <br /> 1: Students wanting more variety in scheduling or availability in career building workshops.
                        <br /> 2: 100% of higher education staff desire to lower student retention and increase a sense of belonging within campus.
                        <br /> 3: Higher education departments do not have one place where they can freely share and communicate information amongst each other.
                    </em>
                    {/* Conceptional Development */}
                    <h1 className="sub-header text-black pb-5">Conceptual Development</h1>
                    <em> These findings dictated our direction for who our persona will be in our design process. We focused on creating a higher education staff persona because they were 83% of our interviewees.
                        All of our higher education interviewees all had motivation to do more for their students and ensure they had all the tools to succeed academically and personally.
                        The major contributor for our persona was Fareine Suarez&rsquo;s, college admission recruiter for Illinois Institute of Technology quote influenced the creation of our persona.
                    </em>

                    {/* IMAGE HERE */}
                    <br />
                    <strong>&rdquo;I want to arm students with the tools they need to succeed. I don&rsquo;t believe in gatekeeping.
                        I don&rsquo;t believe school should be a survival of the fittest situation.&rdquo; <span>- Fareine Suarez </span></strong>

                    <div className="flex flex-col justify-between py-10 h-full ">
                        <em className="mb-4">
                            Fareine&rsquo;s quote about what she wants for her students deeply resonated with us.
                            This affirmed our decision to use her quote for creating and introducing our persona.
                            Fiona Madison, a student recruitment manager, needs a system to visualize students&rsquo; college journey and on-campus involvement so that she can create workshops and connections to promote student success and retention.
                        </em>
                        <em className="mb-4">
                            After setting our problem statement, we had to brainstorm on how we should approach our solution regarding our new persona.
                            Fiona is someone we wanted to focus on to express our empathy for our users.
                            Ensuring her needs and pain points being addressed was our absolute priority.
                            We discovered that Fiona would need a solution and design that aligns with the problem statement above.
                        </em>
                        <em className="mb-4">
                            We had several meetings on our team&rsquo;s approach addressing our problem statement. We were dancing with a &rdquo;live feed&rdquo; concept that allows students and higher education staff to monitor information derived of their own interests
                            whether that would be mental health support or career development. A live feed wasn&rsquo;t enough to fulfill Fiona&rsquo;s problem in her current atmosphere.
                            I suggested a dashboard because it can also include a live feed while having more opportunity to have more features.
                        </em>
                        <em className="mb-4">
                            A dashboard felt the most appropriate because it allows an environment that can be customized with relation to the users liking.
                            We all agreed that using a dashboard would be the design we would focus on but we weren&rsquo;t sure what should be on the dashboard.
                            I suggested that the team perform a 6-8-5 Sketching exercise for more concrete discovery on the product.
                        </em>
                    </div>
                    {/* Four box image 2x2 */}


                    {/* Final Product & Development */}
                </div>
            </main>
        </div>
    );
}