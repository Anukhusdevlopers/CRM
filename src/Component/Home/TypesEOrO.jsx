import { Link } from "react-router-dom";
import "./TypesEOrO.css";

export default function TypesEOrO({
  styles,
  title,
  link1Text,
  link1title,
  link2title,
  link1,
  link2Text,
  link2,
}) {
  return (
    <div style={styles} className="login-container">
      <h3>{title}</h3>
      <div className="section">
        <h4>{link1title}</h4>
        <Link to={link1} className="login-link">
          {link1Text} <span className="icon"></span>
        </Link>
        <hr />
        <h4>{link2title}</h4>

        <Link to={link2} className="login-link">
          {link2Text}
        </Link>
      </div>
    </div>
  );
}
