import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resources from "./Resources";
import MultiActionAreaCard from './Donationpage';
import HomePage from "./HomePage";
import GetInvolvedPage from "./GetInvolvedPage";
import NaviBar from "./NaviBar";
import Footer from "./Footer";
import Gallery from "./Gallery";
function App() {
  return (
    <Router>
      <NaviBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/resource" element={<Resources/>}/>
        <Route path='/donate' element={<MultiActionAreaCard/>}/>
        <Route path="/programs" element={<HomePage/>}/>
        <Route path="/getin" element={<GetInvolvedPage/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
