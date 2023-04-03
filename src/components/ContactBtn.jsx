import React from 'react'
import { Link } from 'react-router-dom'

function ContactBtn({ hoverStyle, handleClick, borderStyle }) {
  return (
    <button onClick={handleClick}
    className={`text-[1.125rem] leading-7 pl-8 pr-[2.063rem] pt-[0.563rem] pb-[0.688rem] rounded-3xl border-[2px] cursor-pointer ${borderStyle} ${hoverStyle}`}>
            
        <Link to='/contact'>contact us</Link>
    </button>
  )
}

export default ContactBtn