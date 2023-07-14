import React from 'react';
import Typewriter from 'typewriter-effect';
import coding from '../images/Coding1.png'
import '../css/Home.css'
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
                        <h1>I'm <span style={{color:'rgb(0, 102, 255)',fontSize:'40px'}}>Rishabh Raj Tarun</span> </h1>
                    </div>
                    <div className="heading typewriter">
                        <Typewriter
                            options={{
                                strings: [
                                    "a MERN Stack Developer",
                                    "a React Native Developer",
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
