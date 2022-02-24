import React from 'react';

import Item from './Item';

import '../css/List.scss';

const List = ({contacts}) => {
    let contactListItems = [];
    // creates a list of items to populate the contact list
    // using the Item component and passes the index, and person to the Item
    contacts.forEach((item,index)=>{
        item.full_name = `${item.name.first} ${item.name.last}`;
        contactListItems.push(
            <Item key={index} person={item} index={index} />
        )
    })
    return (
        <div className='contact-list-container'>
            <ul data-class="contact-list">
                {/* displays the contact list if it is longer than 0
                    displays a list item if there is no contacts.

                    could be used in the future when the user can create their
                    own contacts list and add their own contacts instead of being
                    pre-generated
                */}
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