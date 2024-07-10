export default function About() {
    return (
        <div>
            <div id="About us" className="flex items-center flex-col">
                <div className="text-center font-bold text-3xl m-3">Our Team</div>
                <div className="text-center lg:max-w-lg m-3">
                    Our team of talented high schoolers is dedicated to nurturing 
                    the interests of young physicists, including <strong>several USAPHO metalists</strong>. 
                </div>
                <div className="text-center lg:max-w-lg m-3 mt-10">
                    All proceeds will go towards supporting the <strong>Paly and Gunn Math 
                    Clubs</strong> in the upcoming school year. Financial aid is available, 
                    and registration is on a <strong>first-come first-serve basis.</strong>
                </div>
            </div>
            <div>
                <div id="contact" className="text-4xl font-bold mb-5">Contact Us</div>
                <div>
                    Have any questions or concerns? Feel free to email us at palygunnmathcamp@gmail.com!
                </div>
            </div>
        </div>
    );
}
