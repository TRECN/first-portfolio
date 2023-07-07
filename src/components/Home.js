import React from 'react';
import Typewriter from 'typewriter-effect';
import coding from '../images/Coding1.png'
import '../css/Home.css'
import rishabh from '../images/rishabh-tintodesigns-transparent.png'
function Home() {
    return (
        <div id="home" className="section">
            <div className='home-div'>
                <div className="left">
                   <div className="content-left">
                   <div className="heading hi">
                        <h1>Hi,<span className='wave'>👋 </span></h1>
                    </div>
                    <div className="heading Name">
                        <h1>I'm Rishabh </h1>
                    </div>
                    <div className="heading typewriter">
                        <Typewriter
                            options={{
                                strings: [
                                    "MERN Stack Developer",
                                    "React Native Developer",
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 50,
                            }}
                        />
                    </div>
                   </div>
                </div>
                <div className="right">
                    <img src={coding} alt="coding" />
                </div>
            </div>
        </div>
    );
}

export default Home;
