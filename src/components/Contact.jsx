
const Contact = () => {
  return (
    <div className='section__padding justify-center items-center flex'>
      <div className="glass px-4 lg:px-20 w-full lg:w-[595px] pb-5 lg:pb-8">
        <h1 className="font-roboto text-center font-semibold text-3xl lg:text-[48px] lg:leading-[56.25px] text-[#FFC107] uppercase mt-8">
          connect <span className="text-white font-light">with us</span>
        </h1>

        <h4 className="uppercase font-roboto text-center font-light text-[#FFC107] text-lg lg:text-2xl mt-2">please fill the form</h4>

        <form action="" className="flex flex-col pt-5 lg:pt-8">
          <input
            type="text"
            className="px-5 outline-none border-none glass-input h-10 lg:h-[46px] font-roboto  font-light text-xl text-[#909090] my-5"
            placeholder="Name"
          />

          <div className="flex flex-row w-full gap-3 lg:gap-5">
            <input
              type="tel"
              className="px-5 outline-none border-none glass-input h-10 lg:h-[46px] font-roboto  font-light text-xl text-[#909090] my-5 w-[81px] flex-[0.1]"
              placeholder="+91"
              disabled
            />

            <input
              type="tel"
              className="px-5 outline-none border-none glass-input h-10 lg:h-[46px] font-roboto  font-light text-xl text-[#909090] my-5 flex-[0.9]"
              placeholder="Contact Number"
            />
          </div>

          <input
            type="text"
            className="px-5 outline-none border-none glass-input h-10 lg:h-[46px] font-roboto  font-light text-xl text-[#909090] my-5"
            placeholder="Any Comments?"
          />

          <input
            onClick={(e) => e.preventDefault()}
            type="submit"
            className="utline-none border-none text-right underline uppercase font-roboto  font-medium text-xl text-[#9DF8E8] my-5 cursor-pointer"
            placeholder="Any Comments?"
          />
        </form>

      </div>
    </div>
  );
};

export default Contact;