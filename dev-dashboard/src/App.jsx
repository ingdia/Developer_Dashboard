import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./dashboard/Home.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import ThemeSwitcher from "./components/ThemeSwitcher.jsx";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;