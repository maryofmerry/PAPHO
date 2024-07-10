import Image from 'next/image';
import RegisterButton from '../components/reg';

export default function Home() {
    return (
        <div className="text-lg">
            <div id="about" className="flex grow">
                <div>
                    <div className='text-xl'>2025</div>
                    <div className="text-5xl font-bold mb-5">Palo Alto Physics Olypiad</div>
                    <div className="my-2">
                        <strong>Location: </strong> Paly High School Library
                    </div>
                    <div className="mb-8 mt-2 lg:max-w-lg">
                    <strong>Gunn Physics Club</strong> and <strong>Paly Physics Club</strong> proudly 
                    present the <strong>Palo Alto Physics Olympiad</strong>, an F=MA styled multiple-choice
                      competition. PAPHO explores various physics topics, sparkling a world in each field.
                       Addressing the general lack of physics competitions, PAPHO fosters interest
                        among beginners and challenges advanced competitors. 
                        <br></br>
                        <br></br>
                        Join this unique opportunity
                         to connect with fellow students who share a passion for physics.
                    </div>
                    <RegisterButton />
                </div>
	{/*
                <div className="hidden xl:block ml-auto shrink-0">
                    <Image src="/squiggles.png" width={457} height={424.5} />
                </div>
	*/}
            </div>
    {/*
            <div className="shrink-0 mt-[200px] mb-[100px] flex flex-wrap items-center justify-center gap-6">
                <div className="xl:relative left-[100px] top-[50px]"><Image src="/prev-3.jpg" width={500} height={375} style={{ borderRadius: 30 }} /></div>
                <div className="xl:relative right-[100px] bottom-[100px]"><Image className="relative" src="/prev-4.jpeg" width={500} height={375} style={{ borderRadius: 30 }} /></div>
            </div>
    */}
            <div id="sponsors" className="my-2 text-xl">
                {/* Add your contact section content here */}
				<div className='text-3xl font-bold mb=12'> <br/>
				Sponsors 
				</div>
                <p>Insert clickable logos</p>
                <br></br>
                <p>We are sponsored by these honorable cooperations. Apple Inc., Boeing, Cisco Systems, Dell Technologies, ExxonMobil, Ford Motor Company, Google, Hewlett-Packard (HP), Intel Corporation, Johnson & Johnson, Kimberly-Clark, Lockheed Martin, Microsoft, Northrop Grumman, Oracle Corporation, Pfizer, Qualcomm, Raytheon Technologies, SpaceX, Texas Instruments, United Technologies, Verizon Communications, Wells Fargo, Xerox, Yahoo (now a part of Verizon Media), Zebra Technologies
				</p>
            </div>
        </div>
    );
}
