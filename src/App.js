import logo from './logo.svg';
import './App.css';
import AdBanner from './Components/Adbanner/AdBanner';
import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import WhatsHappening from './Components/WhatsHappening/WhatsHappening';
import Shop from './Components/Shop/Shop';
import Reviews from './Components/Reviews/Reviews';
import Understand from './Understand/Understand';
import SomeNews from './Components/SomeNews/SomeNews';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <AdBanner />
      <Navbar />
      <HeroSection />
      <WhatsHappening />
      <Shop />
      <Reviews />
      <Understand />
      <SomeNews />
      <hr />
      <Footer />
    </>
  );
}

export default App;
