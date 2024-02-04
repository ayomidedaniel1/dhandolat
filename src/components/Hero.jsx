import hero from '../assets/hero.svg';
import hero1 from '../assets/hero1.svg';
import hero2 from '../assets/hero2.svg';
import hero3 from '../assets/hero3.svg';
import hero4 from '../assets/hero4.svg';

const Hero = () => {
  return (
    <div className='lg:pl-20 px-6 lg:px-0 pt-10 lg:pt-16 mask-hero'>
      <div className=" mask-right xl:container xl:mx-auto lg:pr-12 pb-20 lg:pb-40">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col justify-between items-stretch gap-8 lg:gap-20 w-full lg:w-[551px]">
            <div className="flex flex-col hero-top justify-center items-center py-12 lg:py-20">
              <h3 className="font-roboto font-medium text-5xl lg:text-[64px] leading-[60px] lg:leading-[75px] text-white">DISCOVER</h3>
              <h3 className="font-roboto font-light text-white text-2xl lg:mt-1 lg:text-[32px] leading-[37px]">Investment Opportunities</h3>
              <button className="font-roboto font-medium text-lg lg:text-xl text-black hero-btn mt-4 lg:mt-7 border-none outline-none w-[70vw] lg:w-[355px] h-10 lg:h-[41.43px]">
                CLICK HERE
              </button>
            </div>

            <div className="flex flex-row justify-between items-baseline hero-bottom px-5 lg:px-14 py-3 lg:py-5 gap-5 lg:gap-20">
              <div className="flex flex-col gap-2 lg:gap-5">
                <img src={hero1} alt="img" className='w-[22px] h-[32px] lg:w-[27px] lg:h-[37px]' />
                <span className="font-roboto font-medium text-[10px] lg:text-xs text-white uppercase">growth</span>
              </div>
              <div className="flex flex-col gap-2 lg:gap-5">
                <img src={hero2} alt="img" className='w-[36px] h-[38px] lg:w-[41px] lg:h-[43px]' />
                <span className="font-roboto font-medium text-[10px] lg:text-xs text-white uppercase">INVESTMENT</span>
              </div>
              <div className="flex flex-col gap-2 lg:gap-5">
                <img src={hero3} alt="img" className='w-[47px] h-[38px] lg:w-[52px] lg:h-[43px]' />
                <span className="font-roboto font-medium text-[10px] lg:text-xs text-white uppercase">PROPERTY</span>
              </div>
              <div className="flex flex-col gap-2 lg:gap-5">
                <img src={hero4} alt="img" className='w-[36px] h-[44px] lg:w-[41px] lg:h-[49px]' />
                <span className="font-roboto font-medium text-[10px] lg:text-xs text-white uppercase">ASSISTANCE</span>
              </div>
            </div>
          </div>

          <img src={hero} alt="hero" className='w-screen h-auto lg:w-[599px] lg:h-[587px] mt-16 lg:mt-0' />
        </div>
      </div>
    </div>
  );
};

export default Hero;