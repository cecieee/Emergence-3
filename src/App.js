import "./App.css";
import About from "./Pages/About/About";
import Footer from "./Pages/Footer/Footer";
import Home from "./Pages/Home/Home";
import Newsletter from "./Pages/Ticket/Ticket";
function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
