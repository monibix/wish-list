import React from 'react'
import "./Form.css"

function Form(props) {

    const [newWish, setNewWish] = React.useState("")
    
    //Recoge el valor del input y actualiza el estado. 
    const handleChange = ({target}) => {
        const value = target.value
        console.log("value", value)
        setNewWish(target.value)
    }

    //Función que se ejecuta cuando usuario hace 'submit'
    const handleSubmit = (e) => {
        e.preventDefault(); 
        props.onSubmit(newWish) //se añade el nuevo deseo (newWish) al array de deseos
        setNewWish("") //pone de nuevo el estado inicial
    }   

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <input type="text" name="input" onChange={handleChange} value={newWish} />
                <button type="submit"> Add</button>
            </form>
        </div>
    )

}

export default Form; 
