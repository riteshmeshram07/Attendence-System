import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Attendence from "./components/Attendence";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Pages/About';


function App() {
  return (
    <div className="App">
<Router>
        <Navbar />
        {/* <Home /> */}
        {/* <Attendence /> */}
        <Routes>
        <Route exact path='/' element={<Home />} />

          <Route exact path="/attendence"  element={<Attendence />} />
          <Route exact path="/about"  element={<About />} />

          {/* <Route path="/about" exact component={About} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
