import React from 'react';
import ListItem from '../ListItem/ListItem';
import "./List.css";

function List(props) {
    console.log("props de List", props)

    return (
        <div className="list">
            <h1>List of items</h1>
            <ListItem wishList={props.wishList} handleDelete={props.handleDelete}/>
        </div>
    )
}

export default List;