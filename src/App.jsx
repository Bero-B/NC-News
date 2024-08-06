import { Routes, Route } from "react-router-dom"
import Navbar from "./components/main/Navbar"
import Home from "./components/main/Home"
import { AllArticles } from "./components/main/AllArticles"
import SingleArticle from "./components/main/SingleArticle"
import Comments from "./components/main/Comments"



function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<AllArticles/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/articles/:article_id/comments" element={<Comments />}></Route>
     </Routes>
    </>
  )
}

export default App
