import { useEffect, useState } from "react"
import { getCommentsForArticle } from "../../../api"
import { formatDate } from "../../../utils/utils"
import "../../../css/Comments.css"

export default function Comments({article_id}){
    const [comments, setComments] = useState([])
    const [commentVotes, setCommentVotes] = useState(0)
    useEffect(() => {
        getCommentsForArticle(article_id)
        .then((commentsData) => {
            setComments(commentsData)
        })
    }, [article_id])
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
                            <button className="voteUp">Vote up</button>
                            <span>{comment.votes + commentVotes}</span>
                            <button className="voteDown">Vote down</button>
                        </span>
                    </li>
                )
            })}
            </ul>
            
        </section>
    )
}