import React from 'react'
import ContactBtn from './ContactBtn'
import BgPattern from '../assets/bg-pattern-home-6-about-5.svg'

function CallToAction() {
  return (
    <section className='relative flex flex-col gap-6 md:gap-0 md:flex-row items-center md:justify-between bg-light-coral text-sacramento-state-green border-sacramento-state-green px-6 md:px-[6.125rem] lg:px-[16.438rem] md:py-[5.25rem] py-[5.188rem] lg:py-[4.75rem] overflow-hidden'>
        <h1 className='font-bold text-[2rem] lg:text-5xl leading-8 text-center md:text-left'>Ready to get started?</h1>
        <ContactBtn borderStyle='border-sacramento-state-green' hoverStyle='hover:text-white hover:bg-sacramento-state-green'/>
        <div className='absolute bottom-[-20px] left-0'>
            <img src={BgPattern} alt="background pattern" />
        </div>
    </section>
  )
}

export default CallToAction