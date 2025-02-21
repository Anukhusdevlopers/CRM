import { Link } from "react-router-dom";
import "./TypesEOrO.css";

export default function TypesEOrO({ styles, title, button1, button2, handleButton1, handleButton2, link1, link2 }) {
  return (
    <div style={styles} className="types container">
      <h3>{title}</h3>

      {button1 && (
        <button onClick={handleButton1} className="button-1">
          <Link style={{ color: "#fff" }} to={link1}>
            {button1}
          </Link>
        </button>
      )}

      {button1 && button2 && <span>Or</span>}

      {button2 && (
        <button onClick={handleButton2} className="button-2">
          <Link style={{ color: "#000" }} to={link2}>
            {button2}
          </Link>
        </button>
      )}
    </div>
  );
}
