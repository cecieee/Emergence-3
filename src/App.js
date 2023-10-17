import "./App.css";
import Appbar from "./Components/Navbar/Navbar.jsx";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";

import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

function App() {
  return (
    <div className="App">
      <Appbar />
      <Home />
      <About />
      <Footer />
    </div>
  );
}

export default App;
