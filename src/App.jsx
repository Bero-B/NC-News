import { Routes, Route } from "react-router-dom"
import Navbar from "./components/main/Navbar"
import Home from "./components/main/Home"
import { AllArticles } from "./components/main/AllArticles"



function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<AllArticles/>}></Route>
     </Routes>
    </>
  )
}

export default App
