import React from 'react'
import { skills,experiences } from '../constants'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';

const About = () => {
  return (
   <section className='max-container'>
    <h1 className='head-text'>
      Hello, I am <span className='blue-gradient_text font-semibold
       drop-shadow'>Nigel Bomett</span>
    </h1>

    <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>As an Electronics and Software Engineer based in Kenya, I am passionate about pushing the boundaries of innovation. 
          I thrive on finding resource-efficient solutions to complex problems and am always on the lookout for opportunities to contribute to groundbreaking projects. 
          Additionally, I have a keen interest in digital art, as well as 3D and 2D animation, blending technology with creativity to bring unique visions to life. 😃
      </p>
    </div>

    <div className='py-10 flex flex-col'>
      <h3 className='subhead-text'>My Skills</h3>
      <div className='mt-16 flex flex-wrap gap-12'>
        {skills.map((skill) => (
          <div className='block-container w-20 h-20' key={skill.name}>
            <div className='btn-back rounded-xl flex justify-center'/>
            <div className='btn-front rounded-xl flex justify-center items-center'>
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Throughout my career I have gained valuable experience working in startups and small and medium sized enterprises which has enabled me to pick up skills in multiple discplines adapting to the needs of the organizations I have worked with.</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                </div>}
                iconStyle={{
                  background: experience.iconBg
                }}
                contentStyle={{
                  borderBottom:'8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point,index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>
                        {point}
                      </li>
                    ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
    </div>

    <hr className='border-slate-200'/>

    <CTA/>
   </section>
  )
}

export default About