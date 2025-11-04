import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./dashboard/Home.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;