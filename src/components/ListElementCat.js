import React from 'react';

function ListElementCat(props) {
    return (
        <div>name: {props.cat.name}, age: {props.cat.age}</div>
    );
}

export default ListElementCat;