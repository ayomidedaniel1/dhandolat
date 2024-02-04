import { useState } from 'react';
import icon from '../assets/icon.svg';
import property from '../assets/property.svg';
import { Link } from 'react-router-dom';

const Properties = () => {
  const [filter, setFilter] = useState(false);
  const [select, setSelect] = useState(false);
  const landMark = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div className="section__padding mask-hero">
      <div className='xl:container xl:mx-auto pb-10 md:pb-16 mb-8 lg:mb-12'>
        <div className="flex flex-row justify-between items-baseline relative">
          <div className="flex flex-row justify-start items-center -mt-10 gap-1 lg:gap-5">
            <Link to={'/'}>
              <img src={icon} alt="img" className='w-6 lg:w-[33.71px] h-6 lg:h-[33.71px]' />
            </Link>
            <Link to={'/'}>
              <h1 className="font-roboto text-center font-normal text-2xl lg:text-[40px] leading-[46.88px] text-[#FFC107] uppercase my-4 md:my-8">
                PROPERTIES
              </h1>
            </Link>
          </div>

          <button className="font-roboto text-lg lg:text-2xl font-light text-white underline uppercase outline-none border-none" onClick={() => setFilter(!filter)}>
            filter
          </button>

          {filter && (
            <div className="filter w-full lg:w-[330px] py-10 px-3 lg:px-6 flex flex-col gap-3 lg:gap-5">
              <div className="flex flex-col gap-2">
                <span className="font-medium font-roboto text-base lg:text-xl text-[#FFC107]">MIN INVESTMENT</span>
                <select name="min investment" id="min" className='bg-white outline-none border-none px-3 rounded-[10px] h-8 lg:h-[34px] text-[#909090] font-light text-sm lg:text-base'>
                  <option value="min">Low to High</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-medium font-roboto text-base lg:text-xl text-[#FFC107]">AREA</span>
                <select name="min investment" id="min" className='bg-white outline-none border-none px-3 rounded-[10px] h-8 lg:h-[34px] text-[#909090] font-light text-sm lg:text-base'>
                  <option value="min">Low to High</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-medium font-roboto text-base lg:text-xl text-[#FFC107]">AREA</span>

                <div className="flex flex-row justify-start items-center gap-2 lg:gap-4">
                  <button
                    className={
                      `font-roboto font-light text-sm lg:text-base h-8 lg:h-[34px]
                      ${select ? 'text-[#652CB2]' : 'text-[#909090]'}
                      ${select ? 'bg-[#89E4D6]' : 'bg-[#FFFFFFF5]'} 
                      rounded-[10px] px-5`
                    }
                    onClick={() => setSelect(!select)}
                  >
                    Noida
                  </button>
                  <button
                    className={
                      `font-roboto font-light text-sm lg:text-base h-8 lg:h-[34px]
                      ${select ? 'text-[#652CB2]' : 'text-[#909090]'}
                      ${select ? 'bg-[#89E4D6]' : 'bg-[#FFFFFFF5]'} 
                      rounded-[10px] px-5`
                    }
                    onClick={() => setSelect(!select)}
                  >
                    Noida
                  </button>
                  <button
                    className={
                      `font-roboto font-light text-sm lg:text-base h-8 lg:h-[34px]
                      ${select ? 'text-[#652CB2]' : 'text-[#909090]'}
                      ${select ? 'bg-[#89E4D6]' : 'bg-[#FFFFFFF5]'} 
                      rounded-[10px] px-5`
                    }
                    onClick={() => setSelect(!select)}
                  >
                    Noida
                  </button>
                </div>
              </div>

              <button className="font-roboto text-sm lg:text-[17px] font-light text-[#89E4D6] underline mt-3 lg:mt-5 outline-none border-none text-right" onClick={() => setFilter(!filter)}>
                DONE
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-14 justify-between items-center mt-6 lg:mt-8 relative">
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

        </div>
      </div>
    </div>
  );
};

export default Properties;