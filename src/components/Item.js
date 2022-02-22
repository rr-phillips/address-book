import React, { useState } from 'react';
import Modal from 'react-modal';

import Details from './Details';

import '../css/Item.scss';

function Item({person, index}) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [inputs, setInputs] = useState({});

    function toggleFormModal() { 
        setIsFormOpen(!isFormOpen);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        console.log('save inputs', inputs);
        toggleFormModal();
    }
    const onFormChange = (inputId, inputValue) => {
        console.log('on form change', inputId, inputValue);
        setInputs(values => ({...values, [inputId]: inputValue}))
    }

    return (
        <div className='person-container'>
            <li className='person' data-class='person' onClick={toggleFormModal}>
                <img className='person-img' data-class="person-img" alt="" src={person.picture.thumbnail} />
                <h2 className='person-name' data-class="person-name">{person.name.first} {person.name.last}</h2>
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