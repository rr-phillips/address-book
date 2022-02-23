import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../css/Item.scss';

function Item({person, index}) {
    const navigate = useNavigate();

    const goToDetails = () => {
        navigate(`/details`, {
            state:{
                person: person,
                phone: person.phone
            }
        });
    }

    return (
        <div className='person-container' data-class='person-container'>
            <li className='person' data-class='person' onClick={goToDetails}>
                <img className='person-img' data-class="person-img" alt="" src={person.picture.thumbnail} />
                <h2 className='person-name' data-class="person-name">{person.full_name}</h2>
            </li>
        </div>
    )
}

export default Item;