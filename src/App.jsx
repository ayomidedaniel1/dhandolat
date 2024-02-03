import { Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/Home';
import Properties from './pages/Properties';

function App () {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
