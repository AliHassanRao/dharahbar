
import Navbar from "./Components/Navbar";
import DreamSection from "./Components/DreamSection";
import ExploreLife from "./Components/ExploreLife";
import Footer from "./Components/Footer";
import DirectorMessage from "./Components/DirectorMessage";


function App() {
  return (
   <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <DreamSection />
      <DirectorMessage/>
      <ExploreLife />
      <Footer />
    </div>
  );
}

export default App;
