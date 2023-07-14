import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import coding from '../images/Coding1.png'
import '../css/About.css'
import rishabh from '../images/RishabhImg.png'
import Skill from './tabs/Skill';
import Education from './tabs/Education';
function About() {
    const [tab, setTab] = useState(true);
    const [colorSkill,setColorSkill]=useState('')
    const [colorEdu,setColorEdu]=useState('')
    useEffect(()=>{
        tab?
            setColorSkill('red')
        :
            setColorEdu('red');

        tab?
            setColorEdu('')
            :setColorSkill('')
        
    },[tab])

    return (
        <div className="section" id='about'>
            <div className="about-div">
                <div className="left">
                    <div className="pic">
                    </div>
                </div>
                <div className="right">
                    <div className="heading-about">
                        <div className="heading typewriter ">
                            <Typewriter

                                options={{
                                    strings: [
                                        "About",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>
                        <div className='heading about-details'>
                            <p>I am a fourth-year undergraduate student pursuing a degree in Computer Science and Engineering. With a strong passion for software development, I have honed my skills in various technologies, including the MERN stack, React Native, and C++.</p>
                        </div>
                        <div className="tabs">
                            <div className="nav-item nav-link " onClick={() => {
                                setTab(true)
                            }} style={{ color: `${colorSkill}` }}>Skills</div>
                            <div className="nav-item nav-link " onClick={() => {
                                setTab(false)
                            
                            }} style={{ color: `${colorEdu}` }}>Education</div>

                        </div>
                        <div className="tabContent">
                            {
                                tab ? <Skill /> : <Education />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
