import { UserContext } from "../../contexts/User"
import { useContext, useState } from "react"
import { getUserByUsername } from "../../../api"
import { useNavigate } from "react-router-dom"
import "../../../css/SignInPage.css"

export default function SignInPage(){
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    const [usernameInput, setUsernameInput] = useState({
        username: ""
    })
    const [isEmptyError, setIsEmptyError] = useState(false)
    const [isError, setIsError] = useState(false)
    function handleChange(e) {
        setUsernameInput({...usernameInput, [e.target.id]: e.target.value})
    }
    function handleClick(e){
        e.preventDefault()
        if (usernameInput.username === ''){
            setIsEmptyError(true)
        } else {
            setIsEmptyError(false)
            getUserByUsername(usernameInput.username)
            .then((userData) => {
                setUser(userData)
                navigate('/')
            })
            .catch(() => {
                setIsError(true)
            })
        }
    }
  
    return (
        <section>
            <h1>NC News</h1>
            <form className="sign-in-form">
                <label className="sign-in-label" htmlFor="username">
                    Enter your username:
                    <input onChange={handleChange}required type="text" name="username" id="username" />
                </label>
                {isEmptyError ? (<span className="error">Please provide a username</span>) : null}
                {isError ? (<span className="error">Username not found</span>) : null}
                <button id="sign-in-button" onClick={handleClick}>Sign in</button>
            </form>
        </section>
    )
}