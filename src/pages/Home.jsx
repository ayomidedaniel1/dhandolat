import { About, Contact, Footer, Hero, Navbar, Properties } from '../components';

const Home = () => {
  return (
    <div className='xl:container xl:mx-auto'>
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;