import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"

function App() {

  return (
    <>
   <Routes >
     <Route path="/" element={<Home />} />
     <Route path="/Result" element={<Home />} />
     <Route path="/FAQ" element={<Home />} />
     <Route path="/Aboutus" element={<Home />} />
     <Route path="/Contactus" element={<Home />} />
   </Routes>
    </>
  )
}

export default App
