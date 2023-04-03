import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContactBtn from "./ContactBtn";
import Logo from "../assets/logo.svg";
import { ReactComponent as HamburgerMenu } from "../assets/icon-hamburger.svg";
import { ReactComponent as Close } from '../assets/icon-close.svg'
import BgPattern1 from '../assets/bg-pattern-about-1-mobile-nav-1.svg'

function Navbar() {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    

    const handleClick = () => {
        setIsMenuToggled(!isMenuToggled);
    }

    //Closes the mobile menu if a user changes the window width to tablet size while the mobile menu is opened
    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 768 ){
                setIsMenuToggled(false)
            }
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {

        if (isMenuToggled) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        
    }, [isMenuToggled]);

    return (
        <nav className="relative flex justify-between items-center px-6 md:px-10 lg:px-[10.313rem] pt-12 md:pt-[4.5rem]">

            <div className="flex gap-12 lg:gap-20">

                <div className="w-[128px] h-[32px] lg:w-[160px] lg:h-[40px] cursor-pointer">
                    <Link to='/'>
                        <img className="w-full h-full" src={Logo} alt="Logo and link to the home page" />
                    </Link>
                </div>

                <ul className="hidden md:flex items-center gap-10">
                    <li className="text-[1.125rem] leading-7 hover:text-light-coral cursor-pointer">
                        <Link to="/">home</Link>
                    </li>
                    <li className="text-[1.125rem] leading-7 hover:text-light-coral cursor-pointer">
                        <Link to="/about">about</Link>
                    </li>
                </ul>
            </div>

            <HamburgerMenu className="md:hidden" onClick={handleClick} />

            <div className="hidden md:block">
                <ContactBtn hoverStyle='hover:bg-white hover:text-dark-green focus:bg-white focus:text-dark-green' borderStyle={'border-white'}/>
            </div>

            {isMenuToggled  &&
                (
                    <div className="absolute top-0 right-0 min-h-screen bg-midnight-green w-[255px] pt-14 pr-6 pl-12 flex flex-col z-50">
                        <Close fill="white" onClick={handleClick} className=" justify-self-end self-end mb-10 cursor-pointer" />
                        <ul className="flex flex-col gap-6 mb-9">
                            <li className="text-[1.125rem] leading-7 hover:text-light-coral cursor-pointer">
                                <Link to="/" onClick={handleClick}>home</Link>
                            </li>
                            <li className="text-[1.125rem] leading-7 hover:text-light-coral cursor-pointer">
                                <Link to="/about" onClick={handleClick}>about</Link>
                            </li>
                        </ul>

                        <ContactBtn handleClick={handleClick} hoverStyle='hover:bg-white hover:text-dark-green focus:bg-white focus:text-dark-green' />

                        <div className='absolute bottom-0 right-[-110px]'>
                            <img src={BgPattern1} alt="background pattern 2" />
                        </div>
                    </div>
                )
            }
            {isMenuToggled  && <div className="overlay" ></div>}

        </nav>
    );
}

export default Navbar;
