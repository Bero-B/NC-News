import { useEffect, useState } from "react"
import { getCommentsForArticle } from "../../../api"
import { formatDate } from "../../../utils/utils"
import "../../../css/Comments.css"
import { updateCommentVotes } from "../../../api"

export default function Comments({article_id}){
    const [comments, setComments] = useState([])
    useEffect(() => {
        getCommentsForArticle(article_id)
        .then((commentsData) => {
            setComments(commentsData)
        })
    }, [article_id])
    function handleClick(commentId, vote){
        setComments((currComments) => {
            return currComments.map((comment) => {
                if (comment.comment_id === commentId){
                    return {...comment, votes: comment.votes + vote}
                }
               return comment 
            })
        })
        updateCommentVotes(commentId, vote)
        .catch(() => {
            setComments((currComments) => {
               return currComments.map((comment) => {
                    if (comment.comment_id === commentId){
                        return {...comment, votes: comment.votes - vote}
                    }
                   return comment 
                })
            })
        })
    }
    
    return (
        <section className="comments-section">
            <h3>Comments</h3>
            <ul className="comments-list">
            {comments.map((comment) => {
                
                return (
                    <li className="comments" key={comment.comment_id}>
                        <p>{comment.author}</p>
                        <p>{formatDate(comment.created_at)}</p>
                        <p>{comment.body}</p>
                        <span className="votes-container">
                            <button  onClick={() => handleClick(comment.comment_id, 1)} className="voteUp">Vote up</button>
                            <span>{comment.votes}</span>
                            <button  onClick={() => handleClick(comment.comment_id, -1)} className="voteDown">Vote down</button>
                        </span>
                    </li>
                )
            })}
            </ul>
            
        </section>
    )
}