import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroeSection/HeroSection';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import DownloadSection from './components/DownloadSection/DownloadSection';
import FaqSection from './components/FaqSection/FaqSection';
import './App.css';
import NewsLetterSection from './components/NewsLetterSection/NewsLetterSection';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <FeaturesSection/>
      <DownloadSection/>
      <FaqSection/>
      <NewsLetterSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
