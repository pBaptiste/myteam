import React from 'react'

function InfoContact({ icon, text}) {
  return (
    <div className='flex items-center gap-6'>
        <div>
            <img src={icon} alt="icon" />
        </div>
        <p className='font-bold text-[1.125rem] leading-[1.75rem] '>{text}</p>
    </div>
  )
}

export default InfoContact