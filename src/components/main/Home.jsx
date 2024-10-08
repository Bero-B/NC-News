import { Link } from "react-router-dom";
import ArticlesList from "../reusable/ArticlesList";
import "../../../css/Home.css"
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/User";


export default function Home(){
    const {user} = useContext(UserContext)
    const [totalArticles, setTotalArticles] = useState(0)
    return (
        <main> 
            {user.username ? <h1>Welcome to NC News, {user.username}!</h1> : <h1>Welcome to NC News</h1> }
            <h2>Latest Articles</h2>
            <ArticlesList setTotalArticles={setTotalArticles} limit={3}/>
            <div className="see-all-container">
                <Link className="links home-page" to={"/articles"}><button>See all articles</button></Link>
            </div>
        </main>
    )
}
