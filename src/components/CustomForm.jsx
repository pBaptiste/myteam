import { React, useState } from "react";

function CustomForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [ title, setTitle ] = useState("");
  const [message, setMessage] = useState("");
  const [ isEmpty, setIsEmpty ] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if(!name.trim() || !email.trim() || !message.trim()){
        setIsEmpty(true)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
      <div className="flex flex-col gap-2">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Name"
          type="text"
          className={`outline-none cursor-pointer bg-transparent border-b ${isEmpty && !name.trim() ? 'border-light-coral' : 'border-white'} pb-4 pl-[0.875rem] text-white text-[0.938rem] leading-[1.563rem] placeholder:text-opacity-60`}
        />
        {isEmpty && !name.trim() &&
        <span className="ml-[.875rem] text-light-coral font-bold italic text-[0.625rem] leading-[0.813rem] mb-4">
          This field is required
        </span> }
        
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email  Address"
          type="email"
          className={`outline-none cursor-pointer bg-transparent border-b ${isEmpty && !name.trim() ? 'border-light-coral' : 'border-white'} pb-4 pl-[0.875rem] text-white text-[0.938rem] leading-[1.563rem] placeholder:text-opacity-6`}
        />
        {isEmpty && !email.trim() && 
        <span className="ml-[.875rem] text-light-coral font-bold italic text-[0.625rem] leading-[0.813rem] mb-4">
          This field is required
        </span>}
        
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={companyName}
          onChange={(event) => setCompanyName(event.target.value)}
          placeholder="Company Name"
          type="text"
          className="outline-none cursor-pointer bg-transparent border-b border-white pb-4 pl-[0.875rem] text-white text-[0.938rem] leading-[1.563rem] placeholder:text-opacity-60"
        />
        {/* {isEmpty && !companyName && 
         <span className="ml-[.875rem] text-light-coral font-bold italic text-[0.625rem] leading-[0.813rem] mb-4">
          This field is required
        </span>} */}
       
      </div>
      <div className="flex flex-col gap-2">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          type="text"
          className="outline-none cursor-pointer bg-transparent border-b border-white pb-4 pl-[0.875rem] text-white text-[0.938rem] leading-[1.563rem] placeholder:text-opacity-60"
        />
        {/* {isEmpty && !title &&  
        <span className="ml-[.875rem] text-light-coral font-bold italic text-[0.625rem] leading-[0.813rem] mb-4">
          This field is required
        </span>} */}
      </div>
      <div className="flex flex-col gap-2">
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Message"
          name=""
          id=""
          className={`cursor-pointer resize-none  outline-none bg-transparent border-b ${isEmpty && !name.trim() ? 'border-light-coral' : 'border-white'} pb-[3.625rem] pl-[0.875rem] text-white text-[0.938rem] leading-[1.563rem] placeholder:text-opacity-60`}
        ></textarea>
        {isEmpty && !message && 
        <span className="ml-[.875rem] text-light-coral font-bold italic text-[0.625rem] leading-[0.813rem]">
          This field is required
        </span>}
      </div>

      <button className="mt-6 bg-white text-deep-jungle-green px-8 pt-[9px] pb-[11px] rounded-3xl w-[123px] hover:bg-dark-green hover:text-white">
        submit
      </button>
    </form>
  );
}

export default CustomForm;
