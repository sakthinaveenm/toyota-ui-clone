import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import SecondNavbar from "./components/SecondNavbar/SecondNavbar";
import Ads from "./components/Ads/Ads";
import TestDrive from "./components/TestDrive/TestDrive";
import "animate.css";
import "animate.css/animate.css";
import CarDisplay from "./components/CarDisplay/CarDisplay";
import useScrollPosition from "@react-hook/window-scroll";
import Petrol from "./components/Petrol/Petrol";
import PetrolDownBanner from "./components/PetrolDownBanner/PetrolDownBanner";
import CarPerformance from "./components/CarPerformance/CarPerformance";
function App() {
  const scrollY = useScrollPosition(60);
  return (
    <div>
      <Navbar />
      <Banner />
      <SecondNavbar />
      <Ads />
      <TestDrive />
      <CarDisplay scrollY={scrollY} />
      <Petrol />
      <PetrolDownBanner />
      <CarPerformance />
    </div>
  );
}

export default App;
