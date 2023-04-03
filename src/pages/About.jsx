import React from 'react'
import CallToAction from '../components/CallToAction'
import DirectorProfile from '../components/DirectorProfile'
import BgPattern1 from '../assets/bg-pattern-about-1-mobile-nav-1.svg'
import BgPattern2 from '../assets/bg-pattern-about-2-contact-1.svg'
import BgPattern3 from '../assets/bg-pattern-home-4-about-3.svg'
import BgPattern4 from '../assets/bg-pattern-about-4.svg'
import Nikita from '../assets/avatar-nikita.jpg'
import Christian from '../assets/avatar-christian.jpg'
import Cruz from '../assets/avatar-cruz.jpg'
import Drake from '../assets/avatar-drake.jpg'
import Griffin from '../assets/avatar-griffin.jpg'
import Aden from '../assets/avatar-aden.jpg'
import Verge from '../assets/logo-the-verge.png'
import Jakarta from '../assets/logo-jakarta-post.png'
import Guardian from '../assets/logo-the-guardian.png'
import TechRadar from '../assets/logo-tech-radar.png'
import Gadgets from '../assets/logo-gadgets-now.png'

function About() {
  const profiles = [
    {
      'avatar' : Nikita,
      'name' : 'Nikita Marks',
      'jobTitle' : 'Founder & CEO',
      'quote' : '"Teamwork makes the dream work. Together, we can achieve anything we set our minds to."'
    },
    {
      'avatar' : Christian,
      'name' : 'Cristian Duncan',
      'jobTitle' : 'Co-founder & COO',
      'quote' : '"None of us is as smart as all of us. When we work together, we can come up with better solutions than we could on our own."'
    },
    {
      'avatar' : Cruz,
      'name' : 'Cruz Hamer',
      'jobTitle' : 'Co-founder & CTO',
      'quote' : '"Alone we can do so little, but together we can do so much. Let us work together to accomplish great things"'
    },
    {
      'avatar' : Drake,
      'name' : 'Drake Heaton',
      'jobTitle' : 'Business Development Lead',
      'quote' : '"Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives."'
    },
    {
      'avatar' : Griffin,
      'name' : 'Griffin Wise',
      'jobTitle' : 'Lead Marketing',
      'quote' : '"Unique perspectives shape unique products, which is what you need to survive these days."'
    },
    {
      'avatar' : Aden,
      'name' : 'Aden Allan',
      'jobTitle' : 'Head of Talent',
      'quote' : '"Empowered teams create truly amazing products. Set the north star and let them follow it."'
    },
  ]

  const companyLogos = [
    {
      'logo' : Verge,
      'width' : 'w-[147px] md:w-[103px] lg:w-[165px]',
      'height' : 'h-[25px] md:h-[16.43px] lg:h-[28px]',
    }, 
    {
      'logo' : Jakarta,
      'width' : 'w-[162px] md:w-[114px] lg:w-[184px]',
      'height' : 'h-[20px] md:h-[13.53px] lg:h-[23px]',
    }, 
    {
      'logo' : Guardian,
      'width' : 'w-[160px] md:w-[112px] lg:w-[180px]',
      'height' : 'h-[24px] md:h-[16.43px] lg:h-[28px]',
    }, 
    {
      'logo' : TechRadar,
      'width' : 'w-[147px] md:w-[103px] lg:w-[165px]',
      'height' : 'h-[24px] md:h-[16.43px] lg:h-[28px]',
    }, 
   {
      'logo' : Gadgets,
      'width' : 'w-[87px] md:w-[61px] lg:w-[98px]',
      'height' : 'h-[40px] md:h-[27.07px] lg:h-[45px]',
    }, 
  ]

  return (
    <main>
      <section className='relative flex flex-col lg:flex-row items-center lg:items-start lg:justify-between text-center lg:text-start gap-4 md:gap-6 lg:gap-8 pt-20  px-6 lg:px-[10.313rem] pb-[6.75rem] md:py-[7rem] lg:py-[7.5rem] overflow-hidden'>

         <div className='absolute bottom-[-100px] md:bottom-[5px] right-[-100px]'>
              <img src={BgPattern1} alt="background pattern 2" />
           </div>

        <h1 className='font-bold text-[2.5rem] md:text-[4rem] leading-10 md:leading-[3.5rem] lg:leading-[6.25rem]'>About</h1>
        <div className='flex flex-col gap-10'>
          <div className='hidden lg:block w-[50px] h-[4px] bg-light-coral'></div>
          <p className='font-semibold text-[0.938rem] leading-7 max-w-[457px] lg:max-w-[610px] '>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
     </div>
      </section>

      <section className='relative px-6 md:px-[6.125rem] lg:px-[10.313rem] pt-[5.5rem] md:pt-[6.25rem] lg:pt-[8.75rem] pb-[7.25rem] md:pb-[8rem] lg:pb-[10.5rem] bg-deep-jungle-green overflow-hidden'>

        <div className='absolute left-[-100px] top-[-100px] md:top-0'>
          <img src={BgPattern2} alt="background pattern 2" />
        </div>

          <h1 className='text-center font-bold text-[2rem] lg:text-5xl leading-8 lg:leading-[3rem] mb-12'>Meet the directors</h1>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[3.313rem] md:gap-x-[0.688rem] md:gap-y-[4.75rem]'>
          {profiles.map(profile => (
            <DirectorProfile avatar={profile.avatar} name={profile.name} jobTitle={profile.jobTitle} quote={profile.quote}/>
          ))}
          </div>

           <div className='absolute bottom-0 right-0'>
              <img src={BgPattern3} alt="background pattern 2" />
           </div>
      </section>

      <section className='relative px-6 md:px-10 lg:px-[10.313rem] py-[5.5rem] md:py-[6.25rem] lg:py-[8.75rem] bg-sacramento-state-green overflow-hidden'>
         <div className='absolute top-[-100px] left-[-100px] md:left-0 lg:top-0'>
              <img src={BgPattern4} alt="background pattern 2" />
           </div>

        <h1 className='text-center font-bold text-[2rem] lg:text-5xl leading-8 lg:leading-[3rem] mb-16 md:mb-[2.875rem]'>Some of our clients</h1>
        <div className='flex flex-col md:flex-row gap-12 lg:gap-20 md:items-center md:justify-center'>
            {companyLogos.map(logo => (
              <div className='flex justify-center' >
                <img className={`${logo.width} ${logo.height}`} src={logo.logo} alt="company logo"/>
              </div>
            ))}
        </div>
      </section>

      <CallToAction />
    </main>
  )
}

export default About