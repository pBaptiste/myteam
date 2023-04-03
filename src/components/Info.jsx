import React from 'react'

function Info({ icon, title, desc}) {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 md:gap-[23px]'>
        <div className='md:w-[72px] md:h-[72px]'>
            <img src={icon} alt="icon" />
        </div>
        <div className='md:max-w-[470px] lg:max-w-[445px]'>
            <h2 className='text-light-coral font-bold text-[1.125rem] leading-7 mb-2 md:mb-4'>{title}</h2>
            <p className='font-semibold text-opacity-80 text-[0.938rem] leading-[1.563rem]'>{desc}</p>
        </div>
    </div>
  )
}

export default Info