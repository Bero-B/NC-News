import { Routes, Route } from "react-router-dom"
import Navbar from "./components/main/Navbar"
import Home from "./components/main/Home"
import { AllArticles } from "./components/main/AllArticles"
import SingleArticle from "./components/main/SingleArticle"
import Comments from "./components/main/Comments"
import SignInPage from "./components/main/SignInPage"
import AccountPage from "./components/main/AccountPage"
import Topics from "./components/main/Topics"



function App() {
  return (
    <>
    <Navbar/>
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/articles" element={<AllArticles/>}></Route>
        <Route path="/articles/:article_id" element={<SingleArticle />}></Route>
        <Route path="/articles/:article_id/comments" element={<Comments />}></Route>
        <Route path="/sign-in" element={<SignInPage/>}></Route>
        <Route path="/account" element={<AccountPage/>}></Route>
        <Route path="/topics" element={<Topics/>}></Route>
     </Routes>
    </>
  )
}

export default App
