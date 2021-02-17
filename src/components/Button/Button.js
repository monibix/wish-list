import React from 'react';
import './Button.css'

function Button(props) {
console.log("props de buton", props)

    const handleClick = () => {props.handleDelete(props.item)}

    return (
        <button className="deleteItem" onClick={handleClick} type="submit" >Delete</button>    
    )
}

export default Button; 