import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../../api";
import "../../../css/ArticlesList.css"
import Loading from "./Loading";

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
        return  <Loading/>
    }
    return (
        <ul className="articles-list">
            {articles.map((article) => {
                return (
                    <li key={article.article_id}><ArticleCard article={article}/></li>
                )
            })}
        </ul>
    )
}