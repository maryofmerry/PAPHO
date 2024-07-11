import Schedule from '../components/sch.tsx'

export default function Format() {
    return (
        <div className="flex items-center flex-col">
            <div id="Format" className="text-center font-bold text-3xl">Format</div>
                <div className="text-center lg:max-w-lg m-3">
                    25 multiple choice questions. 
            </div>
                <div className="text-center lg:max-w-lg mt-10">
                    Physics and the universe are fascinating topics that encompass a vast array of phenomena, theories, and mysteries. From the fundamental forces that govern interactions between particles to the vast expanses of space-time itself, there's no shortage of intriguing subjects to explore. Whether delving into quantum mechanics and its mind-bending implications or pondering the origins and evolution of galaxies, there's always something new to discover and ponder about our place in the cosmos. What aspect of physics or the universe interests you the most?
                </div>
                <br  id="schedule" ></br>

            <div className="text-center text-3xl font-bold m-3">Schedule</div>
                <Schedule/>
        </div>
    );
}
