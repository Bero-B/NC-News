import { Link } from "react-router-dom";
import "../../../css/Navbar.css"
export default function Navbar() {
  return (
    <header>
      <img id="logo" src="/NC-logo2.png" alt="NC-news logo" />
      <nav>
        <ul>
          <li><Link className="links" to={"/"}>Home</Link></li>
          <li><Link className="links" to={"/articles"}>Articles</Link></li>
          <li>Topics</li>
          <li>Sign in/User</li>
        </ul>
      </nav>
    </header>
  );
}
