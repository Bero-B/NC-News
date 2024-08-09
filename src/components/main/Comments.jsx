import { useEffect, useState } from "react"
import { getCommentsForArticle } from "../../../api"
import { formatDate } from "../../../utils/utils"
import "../../../css/Comments.css"
import { updateCommentVotes } from "../../../api"
import Loading from "../reusable/Loading"
import AddComent from "./AddComment"
import DeleteComment from "./DeleteComment"
import { useContext } from "react"
import { UserContext } from "../../contexts/User"

export default function Comments({article_id, setTotalCommentCount}){
    const {user} = useContext(UserContext)
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getCommentsForArticle(article_id)
        .then((commentsData) => {
            const adjustedComments = commentsData.map((comment) => {
               return {...comment, error: false}
            })
            setComments(adjustedComments)
            setIsLoading(false)
        })
    }, [article_id])

    function handleClick(commentId, vote){
        setComments((currComments) => {
            return currComments.map((comment) => {
                if (comment.comment_id === commentId){
                    return {...comment, votes: comment.votes + vote, error: false}
                }
               return comment 
            })
        })
        updateCommentVotes(commentId, vote)
        .catch(() => {
            setComments((currComments) => {
               return currComments.map((comment) => {
                    if (comment.comment_id === commentId){
                        return {...comment, votes: comment.votes - vote, error: true}
                    }
                   return comment 
                })
            })
        })
    }
    if (isLoading){
       return <Loading/>
    }
    return (
        <section className="comments-section">
            <h3>Comments</h3>
            <ul className="comments-list">
            {comments.map((comment) => {
                return (
                        <li className="comments" key={comment.comment_id}>
                        <div className="author-date-container-comments">
                            <p className="comment-author">{comment.author}</p>
                            <p className="comment-date">{formatDate(comment.created_at)}</p>
                        </div>   
                            <p className="comments-text">{comment.body}</p>
                        <span className="votes-container">
                            <button  onClick={() => handleClick(comment.comment_id, 1)} className="voteUp">Vote up</button>
                            <span>{comment.votes}</span>
                            <button  onClick={() => handleClick(comment.comment_id, -1)} className="voteDown">Vote down</button>
                        </span>
                        {user.username === comment.author ? <DeleteComment setComments={setComments} setTotalCommentCount={setTotalCommentCount} commentId={comment.comment_id}/> : null }
                        {comment.error ? (<p className="error">Oops, vote did not go through. Try again later!</p>) : null}   
                    </li>
                )
            })}
            </ul>
            <AddComent article_id={article_id} setComments={setComments} setTotalCommentCount={setTotalCommentCount}/>
        </section>
    )
}