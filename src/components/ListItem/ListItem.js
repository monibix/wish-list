import React from 'react';
import './ListItem.css'
import Button from '../Button/Button';

function ListItem(props) {
    console.log("props en listitem", props)
    let arr = props.wishList
    console.log("array", arr)

    return (
        <div className="listItem">
        <h3>Wishes</h3>
            {
                props.wishList.map((item, idx)=>{
                    return <div key={idx} >
                                <p> {item}</p>
                                <Button handleDelete={props.handleDelete} item={item} />
                            </div>
                })
            }
        </div>
    )
}

export default ListItem;

