import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../../api";
import Lottie from "lottie-react";
import LoadingAnimation from "../../../LoadingAnimation.json"
import "../../../css/ArticlesList.css"

export default function ArticlesList({limit}){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getAllArticles().then((articles) => {
            const limitedArticles = limit ? articles.slice(0,limit) : articles
            setArticles(limitedArticles)
            setIsLoading(false)
        })
    }, [])
    if(isLoading){
        return (
            <div>
                <Lottie id="loading" animationData={LoadingAnimation} loop={true} />
            </div>
        )
    }
    return (
        <ul className="articles-list">
            {articles.map((article) => {
                return (
                    <li key={article.article_id}><ArticleCard img={article.article_img_url} topic={article.topic} title={article.title} author={article.author} commentCount={article.comment_count} articleDate={article.created_at}/></li>
                )
            })}
        </ul>
    )
}