import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Resources from "./Resources";
import MultiActionAreaCard from './Donationpage';
import HomePage from "./HomePage";
import GetInvolvedPage from "./GetInvolvedPage";
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/resource" element={<Resources/>}/>
        <Route path='/donate' element={<MultiActionAreaCard/>}/>
        <Route path="/programs" element={<HomePage/>}/>
        <Route path="/getin" element={<GetInvolvedPage/>}/>
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
