import hero from '../assets/hero.svg';
import hero1 from '../assets/hero1.svg';
import hero2 from '../assets/hero2.svg';
import hero3 from '../assets/hero3.svg';
import hero4 from '../assets/hero4.svg';

const Hero = () => {
  return (
    <div className='lg:pl-20 pl-8 pt-16'>
      <div className=" mask-right xl:container xl:mx-auto lg:pr-12 pb-20 lg:pb-40">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col justify-between items-stretch gap-20">
            <div className="flex flex-col hero-top justify-center items-center py-20">
              <h3 className="font-roboto font-medium text-5xl lg:text-[64px] leading-[75px] text-white">DISCOVER</h3>
              <h3 className="font-roboto font-light text-white text-2xl mt-1 lg:text-[32px] leading-[37px]">Investment Opportunities</h3>
              <button className="font-roboto font-medium text-lg lg:text-xl text-black bg-[#FFC107] hero-btn mt-7 border-none outline-none">CLICK HERE</button>
            </div>

            <div className="flex flex-row justify-between items-baseline hero-bottom px-10 lg:px-14 py-4 lg:py-5 gap-12 lg:gap-20">
              <div className="flex flex-col gap-4 lg:gap-5">
                <img src={hero1} alt="img" className='w-[27px] h-[37px]' />
                <span className="font-roboto font-medium text-xs text-white uppercase">growth</span>
              </div>
              <div className="flex flex-col gap-4 lg:gap-5">
                <img src={hero2} alt="img" className='w-[41px] h-[43px]' />
                <span className="font-roboto font-medium text-xs text-white uppercase">INVESTMENT</span>
              </div>
              <div className="flex flex-col gap-4 lg:gap-5">
                <img src={hero3} alt="img" className='w-[52px] h-[43px]' />
                <span className="font-roboto font-medium text-xs text-white uppercase">PROPERTY</span>
              </div>
              <div className="flex flex-col gap-4 lg:gap-5">
                <img src={hero4} alt="img" className='w-[41px] h-[49px]' />
                <span className="font-roboto font-medium text-xs text-white uppercase">ASSISTANCE</span>
              </div>
            </div>
          </div>

          <img src={hero} alt="hero" className='lg:w-[599px] lg:h-[587px]' />
        </div>
      </div>
    </div>
  );
};

export default Hero;