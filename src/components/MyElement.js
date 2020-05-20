import React from 'react';

function MyElement({name}) {
    if(name === 'error'){
        throw new Error('this is an error!!!');
    }
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

export default MyElement;