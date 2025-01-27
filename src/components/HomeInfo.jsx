import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'


const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
    )

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center 
        neo-brutalism-blue py-4 px-8 text-white mx-5">
        Hi, I am <span className='font-semibold'>Farzin</span>👋
        <br />
        A Software Developer
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with a variety of technologies and tools"
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text="Led a team of developers to build projects that was used by thousands of users"
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text="I am always open to new opportunities and challenges"
            link="/contact"
            btnText="Let's connect"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo