import { useState } from "react"
import { deleteComment } from "../../../api"
import DeleteAnimation from "../reusable/DeleteAnimation"
import "../../../css/DeleteComment.css"
export default function DeleteComment({commentId, setTotalCommentCount, setComments}) {
    const [isError, setIsError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
   
    function handleClick(e){
        e.preventDefault()
        setIsLoading(true)
        setIsError(false)
        setTotalCommentCount((currTotalCommentCount) => {
            return currTotalCommentCount - 1
        })
        deleteComment(commentId)
        .then(() => {
            setIsLoading(false)
            setIsError(false)
            setComments((currComments) => {
                return currComments.filter((comment) => {
                    return comment.comment_id !== commentId
                })
            })
        })
        .catch(() => {
            setIsLoading(false)
            setIsError(true)
            setTotalCommentCount((currTotalCommentCount) => {
                return currTotalCommentCount + 1
            })
        })
    }
    console.log(isLoading)
    return (
        <div>
            <button id="delete-comment-button" onClick={handleClick}><i className="material-icons">&#xe872;</i></button>
            {isLoading ? <DeleteAnimation/> : isError ? <p className="error">Something went wrong! Try again later</p> : null}
        </div>
    )
}