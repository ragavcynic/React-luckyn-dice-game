import "./Button.css"
function Button({clickFunc}){
    return <button className="Button" onClick={clickFunc}>ClickMe</button>
}
export default Button;