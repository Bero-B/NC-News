import { Link } from "react-router-dom";
import "../../../css/Navbar.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/User";

export default function Navbar() {
  const {user} = useContext(UserContext)
  return (
    <header>
      <img id="logo" src="/NC-logo2.png" alt="NC-news logo" />
      <nav>
        <ul>
          <Link className="links" to={"/"}>
            <li>Home</li>
          </Link>
          <Link className="links" to={"/articles"}>
            <li>Articles</li>
          </Link>
          <Link className="links" to={"/topics"} >
            <li>Topics</li>
          </Link>
            {user.username ? <Link className="links" to={'/account'}><li>{user.username}</li> </Link> : <Link className="links" to={"/sign-in"}> <li>Sign in</li> </Link>}
          
        </ul>
      </nav>
    </header>
  );
}
