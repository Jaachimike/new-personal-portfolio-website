import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-black text-jaachiGray-100">
        <div className="bg-jaachiGray-300 border border-gray-700 container max-w-7xl mx-auto px-20">
          <div className="container max-w-7xl mx-auto">
            <Navbar />
            <Routes>
              <Route index path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
