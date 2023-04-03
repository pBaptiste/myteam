import { React, useState } from "react";
import { ReactComponent as Cross } from "../assets/icon-cross.svg";
import { ReactComponent as Close } from "../assets/icon-close.svg";
import { ReactComponent as Twitter } from "../assets/icon-twitter.svg";
import { ReactComponent as LinkedIn } from "../assets/icon-linkedin.svg";

function DirectorProfile({ avatar, name, jobTitle, quote }) {
    const [isProfileToggled, setIsProfileToggled] = useState(false);

    const handleClick = () => {
        setIsProfileToggled(!isProfileToggled);
    };

    return (
        <div className={`relative ${ isProfileToggled ? 'bg-dark-green' : 'bg-sacramento-state-green'} pt-8 px-6 pb-14 flex flex-col items-center text-center`}>
            {isProfileToggled ? (
                <div className="flex flex-col items-center">
                    <h3 className="font-bold text-rapture-blue text-[1.125rem] leading-7 mb-2">
                        {name}
                    </h3>
                    <p className="font-semibold text-[0.938rem] leading-[1.563rem] max-w-[235px] mb-6">
                        {quote}
                    </p>
                    <div className="flex gap-4">
                        <Twitter fill="white" className="hover:fill-light-coral" />
                        <LinkedIn fill="white" className="hover:fill-light-coral" />
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex justify-center mb-4">
                        <img
                            className="rounded-full border-[2px] border-[#C4FFFE] w-[96px] h-[96px]"
                            src={avatar}
                            alt="avatar"
                        />
                    </div>
                    <h3 className="font-bold text-rapture-blue text-[1.125rem] leading-7">
                        {name}
                    </h3>
                    <p className="font-medium italic text-[0.938rem] leading-[1.563rem]">
                        {jobTitle}
                    </p>
                </>
            )}
            <button
                onClick={handleClick}
                className={`${isProfileToggled ? "bg-rapture-blue hover:bg-light-coral" : "bg-light-coral hover:bg-rapture-blue"
                    } p-5 rounded-full absolute bottom-[-20px]`}
            >
                {isProfileToggled ? <Close fill="sacramento-state-green" /> : <Cross />}
            </button>
        </div>
    );
}

export default DirectorProfile;
