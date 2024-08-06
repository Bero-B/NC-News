import { Link } from "react-router-dom";
import ArticlesList from "../reusable/ArticlesList";
import "../../../css/Home.css"

export default function Home(){
    return (
        <main> 
            <h1>Welcome to NC News!</h1>
            <h2>Latest Articles</h2>
            <ArticlesList limit={3}/>
            <div className="see-all-container">
                <p><Link to={"/articles"}>See all articles</Link></p>
            </div>
            
        </main>
    )
}