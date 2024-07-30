// src/pages/Home.jsx
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import TravelSupport from '../components/TravelSupport';
import Memories from '../components/Memories';
import Lounge from '../components/Lounge';
import BestTravellers from '../components/BestTravellers';
import Subscribe from '../components/Subscribe';

const Home = () => {
  return (
    <>
      <Header />
      <BookingForm />
      <TravelSupport />
      <Memories />
      <Lounge />
      <BestTravellers />
      <Subscribe />
    </>
  );
};

export default Home;
