import React from 'react';

import Item from './Item';

import '../css/List.scss';

const List = ({contacts}) => {
    let contactListItems = [];
    contacts.forEach((item,index)=>{
        contactListItems.push(
            <Item key={index} person={item} index={index} />
        )
    })
    return (
        <div className='contact-list-container'>
            <ul data-testid="contact-list">
                {contacts.length > 0 && contactListItems}
                {contacts.length === 0 &&
                    <li className='contact'>
                        No Contacts Added
                    </li>
                }
            </ul>
        </div>
    );
};

export default List;