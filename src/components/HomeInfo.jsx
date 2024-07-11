import React from 'react'
import { Link } from 'react-router-dom';
import {arrow} from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-x1 text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain'/>
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-x1 sm:leading-snug text-center
        
        neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Nigel Bomett</span> 👋
            <br/>
            An Electronics and Software Engineer. 
            <br/>
            I created this site to experiment, showcase, and host some of my favorite projects.
            <br/>
            I have a lot more to add as I continue exploring and developing.
        </h1>
    ),
    2: (
        <h1><InfoBox
            text="More than 6 years of experience across multiple discplines"
            link="/about"
            btnText="Learn more"
        /></h1>
    ),
    3: (
        <h1><InfoBox
            text="Worked on several successful projects over the years"
            link="/projects"
            btnText="Visit my portfolio"
        /></h1>
    ),
    4: (
        <h1><InfoBox
            text="Need a project done or looking for a developer? "
            link="/contact"
            btnText="Let's talk"
        /></h1>
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
  
}

export default HomeInfo