import React from 'react';
import '../css/Projects.css'
import Card from './tabs/Card';
import data from './data';
import Typewriter from 'typewriter-effect';
import Slider from 'infinite-react-carousel';

function Projects() {
  console.log(data)
  return (
    <section className="section-proj" id='projects'>
      <div className="left">
      <div className="heading typewriter ">
                            <Typewriter

                                options={{
                                    strings: [
                                        "PROJECTS",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                    deleteSpeed: 50,
                                }}
                            />
                        </div>
      </div>
      <div className="right">
      <Slider className='Slider' dots slidesToShow={2}>
      {
        data.map((item)=>(
          <Card heading={item.heading} images={item.images} description={item.description} stack={item.stack} git={item.git}/>
        ))

      }
      
      </Slider>
      </div>
    </section>
  );
}

export default Projects;
