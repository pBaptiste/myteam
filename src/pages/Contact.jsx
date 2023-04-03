import React from 'react'
import InfoContact from '../components/InfoContact'
import CustomForm from '../components/CustomForm'
import Person from '../assets/icon-person.svg'
import Cog from '../assets/icon-cog.svg'
import Chart from '../assets/icon-chart.svg'
import BgPattern1 from '../assets/bg-pattern-about-2-contact-1.svg'
import BgPattern2 from '../assets/bg-pattern-contact-2.svg'

function Contact() {
  return (
    <div className='relative flex flex-col lg:flex-row lg:justify-between lg:gap-10 lg:px-[10.313rem] pt-20 pb-[5.5rem] md:pt-[7rem] overflow-hidden'>

       

      <div className='relative flex flex-col items-center lg:items-start px-6 md:px-[8rem] lg:px-0 pb-14 md:pb-16 '>
        <div className='hidden md:block absolute left-[-130px] lg:left-[-270px] top-0'>
              <img src={BgPattern1} alt="background pattern 1" />
           </div>

        <h1 className='text-center lg:text-start font-bold text-[2.5rem] md:text-[4rem] leading-10 md:leading-[3.5rem] lg:leading-[6.25rem] mb-4 md:mb-6'>Contact</h1>
        <h2 className='text-center lg:text-start font-bold text-light-coral text-[2rem] leading-[3rem] mb-10 md:mb-6'>Ask us about</h2>
        <div className='flex flex-col gap-8 md:gap-2'>
            <InfoContact icon={Person} text='The quality of our talent network'/>
            <InfoContact icon={Cog} text='Usage & implementation of our software'/>
            <InfoContact icon={Chart} text='How we help drive innovation'/>
        </div>
      </div>

      <div className='relative px-6 md:px-[7.063rem] lg:px-0 lg:w-[50%]'>
       <CustomForm />
      </div>

      <div className='absolute bottom-[-100px] md:bottom-0 right-[-100px]'>
              <img src={BgPattern2} alt="background pattern 2" />
           </div>

    </div>
  )
}

export default Contact