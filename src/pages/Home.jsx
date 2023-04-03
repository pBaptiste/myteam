import React from 'react'
import Info from '../components/Info'
import CallToAction from '../components/CallToAction'
import Testimonial from '../components/Testimonial'
import BgPattern1 from '../assets/bg-pattern-home-1.svg'
import BgPattern2 from '../assets/bg-pattern-home-2.svg'
import BgPattern3 from '../assets/bg-pattern-home-3.svg'
import BgPattern4 from '../assets/bg-pattern-home-4-about-3.svg'
import BgPattern5 from '../assets/bg-pattern-home-5.svg'
import Person from '../assets/icon-person.svg'
import Cog from '../assets/icon-cog.svg'
import Chart from '../assets/icon-chart.svg'
import Kady from '../assets/avatar-kady.jpg'
import Arthur from '../assets/avatar-arthur.jpg'
import Aiysha from '../assets/avatar-aiysha.jpg'


function Home() {
  return (
    <main>
        <section className='relative px-6 md:px-[9.75rem] lg:px-[10.313rem] pt-20 lg:pt-[8.063rem] md:pt-[7rem] pb-[12.313rem] md:pb-[16rem] lg:pb-[15.625rem] flex flex-col lg:flex-row items-center gap-[1.125rem] md:gap-6 lg:justify-between'>
            <h1  className='font-bold text-center lg:text-left text-[2.5rem] md:text-[4rem] lg:text-[6.25rem] leading-10 md:leading-[3.5rem] lg:leading-[6.25rem] lg:max-w-[33.875rem]'>Find the best <span className='text-light-coral'>talent</span></h1>
            <div className='flex flex-col gap-[79px]'>
                <div className='hidden lg:block w-[50px] h-[4px] bg-rapture-blue'></div>
                <p className='font-semibold text-center lg:text-left text-[0.938rem] lg:text-[1.125rem] leading-7 lg:max-w-[27.813rem]'>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
        
            <div className='hidden lg:block absolute left-[-100px]'>
                <img className='w-full h-full' src={BgPattern1} alt="background pattern" />
            </div>

            <div className='absolute bottom-0 lg:right-[165px]'>
                <img className='w-full h-full' src={BgPattern2} alt="background pattern" />
            </div>
        </section>

        <section className='flex flex-col lg:flex-row lg:justify-between  relative py-16 md:py-[6.25rem] lg:py-[8.75rem] px-6 md:px-[6.125rem] lg:px-[10.313rem] bg-sacramento-state-green overflow-hidden'>
            <div className='absolute top-0 right-[-100px] lg:top-[300px]'>
                <img className='w-full h-full' src={BgPattern3} alt="background pattern" />
            </div>

            <div className='pr-[6.938rem] pb-14'>
                <div className='w-[50px] h-[4px] bg-light-coral mb-8'></div>
                <h2 className='font-bold text-[2rem] lg:text-5xl leading-8 lg:leading-[3rem] lg:max-w-[445px]'>Build & manage distributed teams like no one else.</h2>
            </div>

            <div className='flex flex-col gap-12 md:gap-8'>
                <Info icon={Person} title='Experienced Individuals' desc='Our network is made up of highly experienced professionals who are passionate about what they do.'/>
                <Info icon={Cog} title='Easy to Implement' desc='Our processes have been refined over years of implementation meaning our teams always deliver.'/>
                <Info icon={Chart} title='Enhanced Productivity' desc='Our customized platform with in-built analytics helps you manage your distributed teams.'/>
            </div>
        </section>

        <section className='relative flex flex-col items-center px-6 md:px-[6.125rem] lg:px-[10.313rem] pt-[8.75rem] md:py-[6.25rem] lg:py-[8.75rem] pb-[10.25rem] gap-12'>
            <div className='absolute top-0 left-0'>
                <img src={BgPattern4} alt="pattern 4" />
            </div>

            <h2 className='font-bold text-center text-[2rem] lg:text-5xl leading-8 mb-12 max-w-[327px] md:max-w-[573px] lg:max-w-[932px]'>Delivering real results for top companies. Some of our <span className='text-rapture-blue'>success stories.</span></h2>

            <div className='grid lg:grid-cols-3 gap-[6.5rem] lg:gap-[1.875rem]'>
                <Testimonial quote='“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”' name='Kady Baker' jobTitle='Product Manager at Bookmark' avatar={Kady} />
                <Testimonial quote='“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”' name='Aiysha Reese' jobTitle='Founder of Manage' avatar={Aiysha}/>
                <Testimonial quote='“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”' name='Arthur Clarke' jobTitle='Co-founder of MyPhysio' avatar={Arthur}/>
            </div>

            <div className='absolute bottom-0 right-0'>
                <img src={BgPattern5} alt="home pattern 5" />
            </div>

        </section>

        <CallToAction />
        
    </main>
  )
}

export default Home