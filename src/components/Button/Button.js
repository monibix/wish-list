import React from 'react';
import './Button.css'

function Button(props) {
console.log("props de buton", props)

    const handleSubmit = (event) => {
        console.log("delete item")
        event.preventDefault()
        props.handleDelete(props.item)
    }

    return (
            <form onSubmit={handleSubmit} className="deleteItem">
                <button type="submit">Delete</button>
            </form>
    )
}

export default Button; 