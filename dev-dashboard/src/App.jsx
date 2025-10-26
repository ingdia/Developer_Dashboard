import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'  
import Home from "./dashboard/Home.jsx"

function App() {


  return (
    <>
      <Navbar/>
      <BrowserRouter>
          <Routes>
            <Route path= '/' element={<Home/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
