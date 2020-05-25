import React from 'react';
import ListElementCat from './ListElementCat';

const ListsAndKeysElements = () => {
    let showCats = true;

    const cats = [
        {
            id: 1,
            name: 'lucifer',
            age: '3'
        },
        {
            id: 2,
            name: 'don gato',
            age: '2'
        },
        {
            id: 3,
            name: 'michu',
            age: '5'
        }
    ];

    const catsHtml = cats.map(kittie =>
        <ListElementCat key={kittie.id} cat={kittie} />
    );


    if(showCats) {
        return (<div>{catsHtml}</div>)
    }

};

export default ListsAndKeysElements;