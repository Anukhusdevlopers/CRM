import './TypesEOrO.css'
export default function TypesEOrO({styles, title, button1, button2, handleButton1, handleButton2}) {
  return (
    <div style={styles} className="types container">
        <h3>{title}</h3>
        <button onClick={handleButton1} className="button-1" >{button1}</button>
        <span>Or</span>
        <button onClick={handleButton2} className="button-2">{button2}</button>
      </div>
  )
}
