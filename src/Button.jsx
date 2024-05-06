import "./Button.css"

function Button({title,bColor,borColor}) {
    const style1 = {
        backgroundColor: bColor,
        borderColor: borColor,
        
    };

    return (
        <button style={style1}>{title}</button>
    )
}

export default Button