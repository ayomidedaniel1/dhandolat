import mail from '../assets/mail.svg';
import call from '../assets/call.svg';
import whatsapp from '../assets/whatsapp.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='section__padding bg-[#2C1051] mask-bottom'>
      <div className="xl:container xl:mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-2 lg:px-20 pb-14 lg:pb-24 lg:pt-7">
          <h1 className="uppercase text-[#FFC107] font-light text-3xl lg:text-[40px] font-roboto cursor-pointer">logo</h1>

          <div className="flex flex-col justify-center items-start mt-14 lg:mt-0 gap-5 lg:gap-10">
            <div className="flex flex-row justify-between items-center gap-8 cursor-pointer">
              <img src={mail} alt="mail" className='w-7 lg:w-[38.44px] h-7 lg:h-[38.44px]' />
              <span className="font-roboto font-light text-sm lg:text-base text-white uppercase">mail id</span>
            </div>
            <div className="flex flex-row justify-between items-center gap-8 cursor-pointer">
              <img src={call} alt="call" className='w-7 lg:w-[38.44px] h-7 lg:h-[38.44px]' />
              <span className="font-roboto font-light text-sm lg:text-base text-white">Contact no</span>
            </div>
          </div>

          <div className="flex flex-col justify-center items-start mt-14 lg:mt-0 gap-7 lg:gap-10">
            <span className="font-roboto font-light text-sm lg:text-base text-white uppercase cursor-pointer">home</span>
            <span className="font-roboto font-light text-sm lg:text-base text-white uppercase cursor-pointer">about us</span>
            <span className="font-roboto font-light text-sm lg:text-base text-white uppercase cursor-pointer">properties</span>
            <span className="font-roboto font-light text-sm lg:text-base text-white uppercase cursor-pointer">contact</span>
          </div>

          <div className="flex flex-col justify-center items-start mt-14 lg:mt-0 gap-3">
            <span className="font-roboto font-light lg:text-2xl text-base text-white uppercase">DIRECTLY CONTACT US ON</span>

            <div className="flex flex-row justify-start items-center whatsapp px-5 py-4 cursor-pointer">
              <img src={whatsapp} alt="whatsapp" className='w-7 lg:w-[38.44px] h-7 lg:h-[38.44px]' />
              <span className="font-roboto font-light text-lg lg:text-[32px] text-[#89E4D6] uppercase pl-5 pr-6">whatsapp</span>
            </div>
          </div>
        </div>

        <div className='-ml-[100000px] w-[100000000px] h-[1px] bg-[#FFFFFF91]' />

        <div className="flex flex-col justify-center items-center mt-10 lg:mt-16 mb-10">
          <span className="text-white font-light text-sm lg:text-xl text-center">
            &copy; {currentYear} ALL RIGHTS RESERVED | POWERED BY <span className="text-[#FFC107]"> PROPERTY VISTA</span>
          </span>

          <span className="text-white font-light text-sm lg:text-xl text-center">
            DISCLAIMER
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
