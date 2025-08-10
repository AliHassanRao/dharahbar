
import Navbar from "./Components/Navbar";
import DreamSection from "./Components/DreamSection";
import ExploreLife from "./Components/ExploreLife";
import Footer from "./Components/Footer";
import DirectorMessage from "./Components/DirectorMessage";
import TopMovingText from "./Components/TopMovingText";
import MarqueeTicker from "./Components/MarqueeTicker";
import VisionSection from "./Components/VisionSection";
import EventSection from "./Components/EventSection";
import Hero from "./Components/Hero";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <MarqueeTicker />
      <Navbar />
      <Hero />
      {/* <TopMovingText/> */}
      {/* <DreamSection /> */}
      <VisionSection />
      <DirectorMessage />
      <ExploreLife />
      <EventSection />
      <Footer />
    </div>
  );
}

export default App;
