import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Offers from './pages/Offers';
import Status from './pages/Status';
import Destinations from './pages/Destinations';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = `${navbarHeight}px`;
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/status" element={<Status />} />
        <Route path="/destinations" element={<Destinations />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
