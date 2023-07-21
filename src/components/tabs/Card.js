import React,{useState,useEffect} from 'react'
import '../../images/Switch-Code/Select.png'
import '../../images/Coding.png'
import { TbBrandCpp, TbBrandJavascript, TbBrandTypescript,TbBrandVscode } from 'react-icons/tb'
import { BiLogoJava,BiLogoFirebase,BiLogoMongodb,BiLogoGit,BiLogoGithub, BiLogoPython, BiLogoHtml5, BiLogoCss3,BiLogoNodejs,BiLogoReact } from 'react-icons/bi'
import {SiExpress,SiPostman}from'react-icons/si'
import{BsAndroid}from 'react-icons/bs'

const Card = ({heading,images,description,stack,git}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
        }, 3000); // Change slide every 3 seconds
        
        return () => {
          clearInterval(interval);
        };
      }, []);
  return (
    <div className="Card">
        
        <div className="images"> 
                
        <div className='image' style={{backgroundImage: `url(${images[currentSlide]})`}}>
        </div>
        </div>
        <div className="CardHeading">
            <h1>{heading}</h1>
            <a href={`${git}`}><BiLogoGithub/></a>

        </div>
        <div className="stacks">
          {
            stack.map(item=>(
              <div className="stack">
                {
                  item
                }
              </div>
            ))
              
          }
        </div>
        <div className="desc">
            {description}
        </div>
        
    </div>
    )
}

export default Card