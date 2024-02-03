import { Fade as Hamburger } from 'hamburger-react';
import { useState } from "react";
import { Link } from "react-router-dom";

const links = ['home', 'about us', 'properties', 'contact'];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);
  const closeMobileMenu = () => setToggleMenu(false);

  return (
    <div className='flex flex-row justify-between items-center py-6 lg:py-12 pb-2 px-8 md:px-16 lg:px-20'>
      <h2 className={toggleMenu ? "text-white font-normal font-roboto uppercase text-xl z-50 absolute left-8 top-9" : "text-white font-normal font-roboto uppercase text-xl"}>
        logo
      </h2>

      <div className="hidden lg:flex flex-row justify-between items-center">
        {links.map(link => (
          <Link className="ml-16 text-white font-roboto text-xl font-normal hover:text-[#FFC107] uppercase cursor-pointer"
            key={link}
            // to={link}
            smooth={false}
            duration={500}
            spy={true}
            offset={-70}
            activeStyle={{
              color: '#FFC107',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            {link}
          </Link>
        ))}
      </div>

      <div className={toggleMenu ? "block lg:hidden absolute right-8 top-7 z-10" : "block lg:hidden top-7 right-4 z-10"} onClick={handleClick}>
        <Hamburger toggled={toggleMenu} toggle={setToggleMenu} size={18} color={'#FFF'} />
      </div>

      {toggleMenu &&
        <div
          className="bg-[#111959] absolute top-0 left-0 z-[2] w-full h-[100vMax] flex flex-col lg:hidden justify-center items-center py-[50vh] px-0 slide-bottom">
          {links.map(link => (
            <div
              className='text-base uppercase pb-8 text-[#666666]]'
              key={link}
            >
              <Link
                // to={link}
                smooth={false}
                duration={500}
                spy={true}
                offset={-70}
                onClick={closeMobileMenu}
                className='text-3xl uppercase pb-8 text-white font-semibold font-roboto'>
                {link}
              </Link>
            </div>
          ))}

        </div>
      }
    </div>
  );
};

export default Navbar;