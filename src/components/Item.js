import React, { useState } from 'react';
import Modal from 'react-modal';

import Details from './Details';

import '../css/Item.scss';

function Item({person, index}) {
    const [isFormOpen, setIsFormOpen] = useState(false);

    function toggleFormModal() { 
        setIsFormOpen(!isFormOpen);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        toggleFormModal();
    }
    const onFormChange = (inputId, inputValue) => {
        person[inputId] = inputValue;
    }

    return (
        <div className='person-container' data-class='person-container'>
            <li className='person' data-class='person' onClick={toggleFormModal}>
                <img className='person-img' data-class="person-img" alt="" src={person.picture.thumbnail} />
                <h2 className='person-name' data-class="person-name">{person.full_name}</h2>
            </li>
            <Modal
                isOpen={isFormOpen}
                onRequestClose={toggleFormModal}
                contentLabel="Contact Details"
                className="base-modal"
                overlayClassName="base-overlay"
                ariaHideApp={false}
            >
                <Details onChange={onFormChange} onSubmit={onFormSubmit} person={person} />
            </Modal>
        </div>
    )
}

export default Item;