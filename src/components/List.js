import React from 'react';

import Item from './Item';

import '../css/List.scss';

const List = ({contacts}) => {
    let contactListItems = [];
    contacts.forEach((item,index)=>{
        item.full_name = `${item.name.first} ${item.name.last}`;
        contactListItems.push(
            <Item key={index} person={item} index={index} />
        )
    })
    return (
        <div className='contact-list-container'>
            <ul data-class="contact-list">
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