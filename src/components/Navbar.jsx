
const links = ['home', 'about-us', 'properties', 'contact'];

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between items-center py-5 px-8 md:px-16 lg:px-20'>
      <h2 className="">logo</h2>

      <div className="flex flex-row justify-between items-center">
        {links.map(link => (
          <a className="m-10" key={link}>{link}</a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;