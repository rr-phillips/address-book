import React from 'react';

import '../css/Item.css';

function Item({person}) {

    function goToDetails() {
        console.log('got to details', {person});
    }

    return (
        <li className='person' data-class='person' onClick={goToDetails}>
            <img className='person-img' data-class="person-img" alt="" src={person.picture.thumbnail} />
            <h2 className='person-name' data-class="person-name">{person.name.first} {person.name.last}</h2>
        </li>
    )
}

export default Item;