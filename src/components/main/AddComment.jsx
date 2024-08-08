import { useState } from "react"
import { useContext } from "react"
import { UserContext } from "../../contexts/User"
import { postCommentToArticle } from "../../../api"
import ErrorAnimation from "../reusable/ErrorAnimation"
import { Link } from "react-router-dom"
import "../../../css/AddComment.css"
import PostingAnimation from "../reusable/PostingAnimation"
import { getCommentsForArticle } from "../../../api"

export default function AddComent({article_id, setComments, setTotalCommentCount}){
    const {user} = useContext(UserContext)
    const [userComment, setUserComment] = useState("")
    const [isLoggedError, setIsLoggedError] = useState(false)
    const [isEmptyError, setIsEmptyError] = useState(false)
    const [isError, setIsError] = useState(false)
    const [isPosting, setIsPosting] = useState(false)

    function handleChange(e){
        setUserComment(e.target.value)
        setIsEmptyError(false)
    }
    function handleClick(e) {
        e.preventDefault()
        if (userComment === ''){
           setIsEmptyError(true)
        } else if (user.username) {
            setIsPosting(true)
            setUserComment('')
            setIsLoggedError(false)
            setTotalCommentCount((currTotalCommentCount) => {
                return currTotalCommentCount + 1
            })
            postCommentToArticle(article_id, user.username, userComment)
            .then(() => {
                setIsPosting(false)
                setIsError(false)
                return getCommentsForArticle(article_id)
                .then((updatedComments) => {
                    setComments(updatedComments)
                })               
            })
            .catch(() => {
                setIsPosting(false)
                setIsError(true)
                setTotalCommentCount((currTotalCommentCount) => {
                    return currTotalCommentCount - 1
                })
            })
        } else {
            setIsLoggedError(true)
        }
    }
    function handleRetry () {
        setIsError(false);
        setUserComment("");
        setIsEmptyError(false);
        setIsLoggedError(false);
        setIsPosting(false)
    }
    if (isError) {
       return (
        <div>
            <p onClick={handleRetry} style={{cursor: "pointer", color:"red"}}>Oh no, something went wrong! Try again</p>
            <ErrorAnimation/>
        </div>
        )
    }
    if (isPosting) {
        return (
            <div>
               <PostingAnimation/> 
            </div>
        )
    }
    return (
        <section className="add-comment-section">
            <h3>Post a comment</h3>
            <form className="add-comment-form">
                <label htmlFor="comment">Add your comment below:
                    <textarea value={userComment} onChange={handleChange} name="comment" id="comment" placeholder="Write your comment here..."></textarea>
                </label>
                {isEmptyError ? (<span className="error">Comments cannot be empty</span>) : null}
                {isLoggedError ? (<span className="error">Please <Link className="links comment-field" to={"/sign-in"}>log in</Link> to post a comment</span>) : null}
                <button id="add-comment-button" onClick={handleClick}>Add</button>
            </form>
        </section>
    )
}