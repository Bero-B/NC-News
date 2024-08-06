import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../../api";
import { formatDate } from "../../../utils/utils";
import Loading from "../reusable/Loading";
import Comments from "./Comments";
import "../../../css/SingleArticle.css"
import { updateArticleVotes } from "../../../api";

export default function SingleArticle(){
    const [article, setArticle] = useState({})
    const {article_id} = useParams()
    const [optimisticVotes, setOptimisticVotes] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const formattedDate = formatDate(article.created_at)
    function handleClick(e){
        if (e.target.className === "voteUp"){
            setOptimisticVotes((currVotes) => {
                return currVotes + 1
            })
            updateArticleVotes(article_id, 1)
            .catch(() => {
                setOptimisticVotes((currVotes) => {
                    return currVotes - 1
                })
            })
        } else {
            setOptimisticVotes((currVotes) => {
                return currVotes - 1
            })
            updateArticleVotes(article_id, -1)
            .catch(() => {
                setOptimisticVotes((currVotes) => {
                    return currVotes + 1
                })
            })
        }
    }
    useEffect(() => {
        getArticleById(article_id)
        .then((articleData) => {
            setArticle(articleData)
            setIsLoading(false)
        })
    }, [article_id])
    if (isLoading){
        return <Loading/>
    }
    return (
        <section className="article-section">
            <div className="article-container">
                <h2>{article.title}</h2>
                <h4>{article.topic}</h4>
                <img src={article.article_img_url} alt="" />
                <h5>By {article.author}</h5>
                <p>Published {formattedDate}</p>
                <p>{article.body}</p>
                <p>Comments: {article.comment_count}</p>
                <span className="votes-container article">
                    <button onClick={handleClick} className="voteUp">Vote up</button>
                    <span>{article.votes + optimisticVotes}</span>
                    <button onClick={handleClick} className="voteDown">Vote down</button>
                </span>
            </div>
            <div className="comments-container">
                <Comments article_id={article_id}/>
            </div>
            
        </section>
    )
}