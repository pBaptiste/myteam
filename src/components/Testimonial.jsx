import React from 'react'
import Quotes from '../assets/icon-quotes.svg'

function Testimonial({ quote, name, jobTitle, avatar }) {
  return (
    <div className='relative text-center max-w-[327px] md:max-w-[573px]'>
        <div className='absolute top-[-15%] md:top-[-17%] lg:top-[-15%] left-[40%] z-[1]'>
            <img src={Quotes} alt="background quotes" />
        </div>
        
        <p className='relative z-[2] font-semibold text-[0.938rem] leading-[1.563rem] mb-4'>{quote}</p>
        <h3 className='font-bold text-rapture-blue text-[1.125rem] leading-7 mb-[2px]'>{name}</h3>
        <p className='font-medium italic text-[0.813rem] leading-[1.125rem] mb-4'>{jobTitle}</p>
        <div className='flex justify-center'>
            <img className='rounded-full border-[2px] border-[#C4FFFE] w-[62px] h-[62px]' src={avatar} alt="avatar" />
        </div>
       
    </div>
  )
}

export default Testimonial