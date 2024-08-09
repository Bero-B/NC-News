import ArticleCard from "./ArticleCard";
import { useState, useEffect } from "react";
import { getAllArticles } from "../../../api";
import "../../../css/ArticlesList.css"
import Loading from "./Loading";
import NotFoundAnimation from "./NotFoundAnimation";

export default function ArticlesList({limit, topic, sortByQuery, orderQuery, page, setTotalArticles}){
    const [articles, setArticles] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        getAllArticles(topic, sortByQuery, orderQuery, page, limit)
        .then((response) => {
            const {articles, total_count} = response
            setIsError(false)
            const limitedArticles = limit ? articles.slice(0,limit) : articles
            setArticles(limitedArticles)
            setTotalArticles(total_count)
            setIsLoading(false)
        })
        .catch(() => {
            setIsError(true)
        })
    }, [topic, sortByQuery, orderQuery, page])
    if (isError) {
        return <NotFoundAnimation/>
    }
    if(isLoading){
        return  <Loading/>
    }
    return (
            <ul className="articles-list">
            {articles.map((article) => {
                return (
                    <li className="article-card" key={article.article_id}><ArticleCard article={article}/></li>
                )
            })}
            </ul>
    )
}