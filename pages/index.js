import Image from 'next/image';
import RegisterButton from '../components/reg';

export default function Home() {
    return (
        <div className="text-lg">
            <div id="about" className="flex grow">
                <div>
                    <div className='text-xl'>2025</div>
                    <div className="text-4xl font-bold mb-5">Palo Alto Physics Olypiad</div>
                    <div className="my-2">
                        <strong>Location: </strong> Room 1706 at Palo Alto High School (Paly)
                    </div>
                    <div className="my-2">
                        <strong>Session 1: </strong> June 5th - 9th, 2023 <br />
                        <strong>Session 2: </strong> June 12th - 16th, 2023
                    </div>
                    <div className="my-2">
                        <div><strong>Suggested Donation: </strong> $200 </div>
                        <div className='text-sm italic'>(Donation is optional and funds the Paly Math Club.)</div>
                    </div>
                    <div className="mb-8 mt-2 lg:max-w-lg">
                        Organized by members of the <strong>Gunn Math Circle</strong> and <strong>Paly Math Club</strong>,
                        the <strong>Palo Alto Middle School</strong> (PAMS) Math Camp aims to build interest
                        in math in middle school students through an exploration of various
                        topics, <strong>several of which are not covered in the standard middle
                            school/high school curriculum.</strong>
                    </div>
                    <RegisterButton />
                </div>
	{/*
                <div className="hidden xl:block ml-auto shrink-0">
                    <Image src="/squiggles.png" width={457} height={424.5} />
                </div>
	*/}
            </div>

            <div className="shrink-0 mt-[200px] mb-[100px] flex flex-wrap items-center justify-center gap-6">
                <div className="xl:relative left-[100px] top-[50px]"><Image src="/prev-3.jpg" width={500} height={375} style={{ borderRadius: 30 }} /></div>
                <div className="xl:relative right-[100px] bottom-[100px]"><Image className="relative" src="/prev-4.jpeg" width={500} height={375} style={{ borderRadius: 30 }} /></div>
            </div>

            <div id="sponsors" className="my-2 text-xl">
                {/* Add your contact section content here */}
				<div className='text-3xl font-bold mb=12'> <br/>
				Sponsors 
				</div>
                <p>We are sponsored by these honorable cooperations. Apple Inc., Boeing, Cisco Systems, Dell Technologies, ExxonMobil, Ford Motor Company, Google, Hewlett-Packard (HP), Intel Corporation, Johnson & Johnson, Kimberly-Clark, Lockheed Martin, Microsoft, Northrop Grumman, Oracle Corporation, Pfizer, Qualcomm, Raytheon Technologies, SpaceX, Texas Instruments, United Technologies, Verizon Communications, Wells Fargo, Xerox, Yahoo (now a part of Verizon Media), Zebra Technologies
				</p>
            </div>
        </div>
    );
}
