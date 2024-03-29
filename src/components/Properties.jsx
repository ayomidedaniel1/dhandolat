import icon from '../assets/icon.svg';
import property from '../assets/property.svg';
import next from '../assets/next.svg';
import { Link } from 'react-router-dom';

const Properties = () => {
  const landMark = [1, 2, 3];

  return (
    <div className="section__padding mask-left">
      <div className='xl:container xl:mx-auto pb-10 md:pb-28 mb-8 lg:mb-12'>
        <div className="flex flex-row justify-center items-center gap-1 lg:gap-5">
          <Link to={'/properties'}>
            <img src={icon} alt="img" className='w-6 lg:w-[33.71px] h-6 lg:h-[33.71px]' />
          </Link>
          <Link to={'/properties'}>
            < h1 className="font-roboto text-center font-normal text-3xl lg:text-[40px] leading-[46.88px] text-[#FFC107] uppercase my-4 md:my-8">
              PROPERTIES
            </h1>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center mt-6 lg:mt-8 relative">
          {landMark.map(i => (
            <div className='property p-1 lg:p-2 pb-10 lg:pb-20' key={i}>
              <div className="relative">
                <img src={property} alt="img" />
                <span className='absolute bottom-10 left-7 text-[#FFC107] font-semibold text-2xl lg:text-[32px] leading-9 uppercase font-roboto'>name name</span>
              </div>

              <div className="flex flex-row justify-start items-center gap-12 lg:gap-16 pl-7">
                <div className="flex flex-col">
                  <div className="flex flex-col justify-center items-start">
                    <span className="font-roboto font-semibold lg:text-base text-xs text-[#89E4D6]">20 Lakhs</span>
                    <span className="font-roboto font-medium lg:text-xs text-[8px] mt-[2px] text-[#FFFFFF]">MIN INVESTMENT</span>
                  </div>

                  <div className="flex flex-col justify-center items-start mt-3 lg:mt-4">
                    <span className="font-roboto font-semibold lg:text-base text-xs text-[#89E4D6]">9%-12%</span>
                    <span className="font-roboto font-medium lg:text-xs text-[8px] mt-[2px] text-[#FFFFFF]">RENTAL YIELD</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex flex-col justify-center items-start">
                    <span className="font-roboto font-semibold lg:text-base text-xs text-[#89E4D6]">100 sq.ft.</span>
                    <span className="font-roboto font-medium lg:text-xs text-[8px] mt-[2px] text-[#FFFFFF]">MIN AREA</span>
                  </div>

                  <div className="flex flex-col justify-center items-start mt-3 lg:mt-4">
                    <span className="font-roboto font-semibold lg:text-base text-xs text-[#89E4D6]">Sector 121, Noida</span>
                    <span className="font-roboto font-medium lg:text-xs text-[8px] mt-[2px] text-[#FFFFFF]">LOCATION</span>
                  </div>
                </div>
              </div>

              <span className="uppercase font-roboto text-[#FFC107] underline font-medium text-xs lg:text-sm absolute bottom-10 right-10 cursor-pointer">
                contact
              </span>
            </div>
          ))}

          <Link to={'/properties'} className='absolute -right-10 hidden lg:flex'>
            <img src={next} alt="." />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Properties;