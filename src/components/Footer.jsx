import React from 'react'
import Logo from "../assets/logo.svg";
import { Link } from 'react-router-dom';
import { ReactComponent as Facebook } from '../assets/icon-facebook.svg'
import { ReactComponent as Pinterest } from '../assets/icon-pinterest.svg'
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg'

function Footer() {
    return (
      <footer className="bg-dark-green flex flex-col lg:flex-row items-center md:items-start pt-[4.125rem] px-[3.75rem] md:px-10 lg:px-[10.313rem] pb-16 md:py-14 lg:py-12 text-center md:text-start">
        <div className='w-full flex flex-col md:flex-row justify-between lg:justify-start mb-10 md:mb-8 lg:gap-12'>
          <div className='w-full items-center md:items-start flex flex-col gap-6 md:gap-[3.313rem] lg:gap-[1.563rem]'>
            <div className="w-[96px] h-[24px] lg:w-[160px] lg:h-[40px] cursor-pointer">
              <Link to="/">
                <img className="w-full h-full" src={Logo} alt="logo and link to homepage" />
              </Link>
            </div>

            <ul className="flex gap-6 font-semibold text-[0.938rem] leading-[1.563rem] mb-6">
              <li className="text-white hover:text-light-coral cursor-pointer">
                <Link to="/">home</Link>
              </li>
              <li className="text-white hover:text-light-coral cursor-pointer">
                <Link to="/about">about</Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-end lg:text-start text-white text-opacity-60 font-semibold text-[0.938rem] leading-[1.563rem] md:min-w-[220px]">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
        </div>

        <div className="w-full flex flex-col  gap-4 md:gap-0 lg:gap-[51px] items-center lg:items-end md:flex-row lg:flex-col justify-between">
          <div className="flex items-center lg:items-end gap-4">
            <a href="https://www.facebook.com/">
              <Facebook
                fill="white"
                className="hover:fill-light-coral cursor-pointer"
                aria-label="Visit Facebook"
              />
            </a>
            <a href="https://www.pinterest.com/">
              <Pinterest
                fill="white"
                className="hover:fill-light-coral cursor-pointer"
                aria-label="Visit Pinterest"
              />
            </a>
            <a href="https://twitter.com/?lang=en">
              <Twitter
                fill="white"
                className="hover:fill-light-coral cursor-pointer"
                aria-label="Visit our Twitter"
              />
            </a>
          </div>

          <p className="text-center lg:text-right text-white text-opacity-60 font-semibold text-[0.938rem] leading-[1.563rem]">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </footer>
    );
}

export default Footer