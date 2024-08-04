import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black ">
        <div className="bg-jaachiGray-300 border border-gray-700 container max-w-7xl mx-auto px-20">
          <Navbar />
          <Routes>
            <Route index path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
