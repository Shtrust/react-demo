import "./Button.css"

function Button({title,onClick,bColor,borColor}) {
    const style1 = {
        backgroundColor: bColor,
        borderColor: borColor,
        
    };

    return (
        <button style={style1} onClick={onClick}>{title}</button>
    )
}

export default Button