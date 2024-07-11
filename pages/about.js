export default function About() {
    return (
        <div>
            <div className="flex items-right flex-col">
                <div className=" font-bold text-3xl m-3 text-left">Our Team</div>
                
                <div className="lg:max-w-lg m-3 text-left">
                    Our team of talented high schoolers is dedicated to nurturing 
                    the interests of young physicists, including <strong>several USAPHO metalists</strong>. 
                </div>
                
                <div className="lg:max-w-lg text-left m-3 mt-10">
                    All proceeds will go towards supporting the <strong>Paly and Gunn Physics 
                    Clubs</strong> in the upcoming school year.
                    Registration is on a <strong>first-come first-serve basis.</strong>
                </div>
            </div>
            <br></br>
            <div>
                <div id="contact" className="text-3xl font-bold mb-5 text-left">Contact Us</div>
                <div className="text-left">
                    Have any questions or concerns? Feel free to email us at <p class="hover:bg-highlight">thegunnphysicsclub@gmail.com!</p>
                </div>
            </div>
            <div className="italic underline text-left mt-10">
            <a href="https://www.vecteezy.com/vector-art/23102782-abstract-digital-wireframe-poly-mesh">Background by Vecteezy</a>
            </div>
        </div>
    );
}
