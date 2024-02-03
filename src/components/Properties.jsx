import icon from '../assets/icon.svg';

const Properties = () => {
  return (
    <div className="section__padding">
      <div className='xl:container xl:mx-auto pb-10 md:pb-28'>
        <div className="flex flex-row justify-center items-center gap-5">
          <img src={icon} alt="img" />
          <h1 className="font-roboto text-center font-normal text-[40px] leading-[46.88px] text-[#FFC107] uppercase my-4 md:my-8">
            PROPERTIES
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Properties;