import "./App.css";
import Appbar from "./Components/Navbar/Navbar.jsx";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Workshops from "./Pages/Workshops/Workshops";
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";
import Typed from "react-typed";
import Iv from "./Pages/Iv/Iv";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <div className="App overflow-x-hidden">
      {!loading ? (
        <div>
          <Appbar />
          <Home />
          <About />
          <Workshops />
          <Iv />
          <Footer />
        </div>
      ) : (
        <div class="flex justify-center items-center h-screen w-screen bg-[#0c0d0d]">
          <HashLoader
            color="#E9441D"
            loading
            size={100}
            speedMultiplier={0.9}
          />
          <Typed
            className="md:text-2xl text-white sm:text-sm max-[500px]:text-base text-xl font-bold md:pl-4 pl-2"
            strings={["EMERGENCE 3.0"]}
            typeSpeed={200}
          />
        </div>
      )}
    </div>
  );
}

export default App;
