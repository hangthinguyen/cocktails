import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import SingleCocktails from "./Components/SingleCocktail";

function App() {
  return (
    <div className="bg-[#F1F5F8] h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path=":id" element={<SingleCocktails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
