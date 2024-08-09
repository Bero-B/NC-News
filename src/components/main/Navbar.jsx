import { Link } from "react-router-dom";
import "../../../css/Navbar.css";
import { useContext, useState} from "react";
import { UserContext } from "../../contexts/User";

export default function Navbar() {
  const { user } = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header>
      <Link className="links" to={"/"}>
        <img id="logo" src="../../assets/NC-logo2.png" alt="NC-news logo" />
      </Link>
      <button className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu} aria-label="Toggle navigation">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </button>
      <nav className={`nav-menu ${isOpen ? "open" : ""}`}>
        <ul>
          <Link className="links" to={"/"} onClick={toggleMenu}>
            <li>Home</li>
          </Link>
          <Link className="links" to={"/articles"} onClick={toggleMenu}>
            <li>Articles</li>
          </Link>
          <Link className="links" to={"/topics"} onClick={toggleMenu}>
            <li>Topics</li>
          </Link>
          {user.username ? (
            <Link className="links" to={"/account"} onClick={toggleMenu}>
              <li>{user.username}</li>{" "}
            </Link>
          ) : (
            <Link className="links" to={"/sign-in"} onClick={toggleMenu}>
              {" "}
              <li>Sign in</li>{" "}
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
}
