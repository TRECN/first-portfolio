import React from 'react'
import '../../css/Skills.css'
import { TbBrandCpp, TbBrandJavascript, TbBrandTypescript,TbBrandVscode } from 'react-icons/tb'
import { BiLogoJava,BiLogoFirebase,BiLogoMongodb,BiLogoGit,BiLogoGithub, BiLogoPython, BiLogoHtml5, BiLogoCss3,BiLogoNodejs,BiLogoReact } from 'react-icons/bi'
import {SiExpress,SiPostman}from'react-icons/si'
import{BsAndroid}from 'react-icons/bs'
const Skill = () => {
  return (
    <div className='Skills'>
      <div className="languages">
        <h1>Languages:</h1>
        <div className="langRows">
          <div className="langRow">
            <div className="icon"><TbBrandCpp /></div>
            <div className="icon"><BiLogoJava /></div>
            <div className="icon"><TbBrandJavascript /></div>
            <div className="icon"><BiLogoPython /></div>
          </div>
          <div className="langRow">
            <div className="icon"><TbBrandTypescript /></div>
            <div className="icon"><BiLogoHtml5 /></div>
            <div className="icon"><BiLogoCss3 /></div>
          </div>
        </div>
      </div>
      <div className="frameworks">
      <h1>Frameworks <br></br> & databases: </h1>
        <div className="langRows">
          <div className="langRow">
          <div className="icon"><BiLogoMongodb /></div>
          <div className="icon"><SiExpress /></div>

            <div className="icon"><BiLogoReact /></div>
            <div className="icon"><BiLogoNodejs/></div>
            <div className="icon"><BiLogoFirebase /></div>


          </div>
        </div>
      </div>
      <div className="tools">
      <h1>Tools: </h1>
        <div className="langRows">
          <div className="langRow">
            <div className="icon"><BiLogoGit /></div>
            <div className="icon"><BiLogoGithub/></div>
            <div className="icon"><BsAndroid /></div>
            <div className="icon"><SiPostman/></div>
            <div className="icon"><TbBrandVscode /></div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill