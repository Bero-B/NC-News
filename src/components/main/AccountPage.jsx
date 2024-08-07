import { UserContext } from "../../contexts/User"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import "../../../css/AccountPage.css"
export default function AccountPage(){
    const navigate = useNavigate()
    const {user, setUser} = useContext(UserContext)
    function handleClick(){
        setUser({})
        navigate('/')
    }
    return (
        <section className="account-section">
            <h1>Your Account</h1>
            <div className="avatar-container">
            <img src={user.avatar_url} alt="avatar of the user" />
            </div>
            <h3>Username: {user.username}</h3>
            <h3>Name: {user.name}</h3>
            <button id="logout-button" onClick={handleClick}>Log out</button>
        </section>
    )
}