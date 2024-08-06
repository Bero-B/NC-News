import { Routes, Route } from "react-router-dom"
import Navbar from "./components/main/Navbar"
import Home from "./components/main/Home"
import { AllArticles } from "./components/main/AllArticles"
import SingleArticle from "./components/main/SingleArticle"



function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<AllArticles/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
     </Routes>
    </>
  )
}

export default App
