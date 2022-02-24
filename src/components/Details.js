import React from 'react';
import { format } from 'date-fns';
import { useLocation, useNavigate } from 'react-router-dom';

import BackBtn from '../assets/back-arrow.png';

import '../css/Details.scss';

const Details = () => {
    let person;
    const navigate = useNavigate();
    const location = useLocation();
    let dobDate;
    // if the details have been previously stored and there is no state
    // ie. if a user goes to the /details url without navigating through the
    // contacts list page
    if(location.state == null && localStorage.getItem('detail')) {
        person = JSON.parse(localStorage.getItem('detail'));
        dobDate = format(new Date(person.dob.date), "MM-dd-yyyy");
    } else if (location.state !== null) {
        // if the user navigates to the /details through
        // the contacts list and saves the details to the local storage
        person = location.state.person;
        localStorage.setItem('detail', JSON.stringify(person));
        dobDate = format(new Date(person.dob.date), "MM-dd-yyyy");
    }
    // if there is a person loaded or not
    let show = true ? person : false;

    // a handle change function to handle input change if the form is ever
    // reactivated and used to make the contacts editable
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        person[name] = value;
    }

    // goes back using the history syntax
    const goBack = () => {
        navigate(-1);
    }
    // goes home to the contacts list page if user navigates to the /details page
    // without going to the contacts list first
    const goHome = () => {
        navigate('/');
    }
    return (
        <>
        {/* shows the details page if the person is loaded */}
        {show &&
        <div className="details-main">
            <img className='back-btn' onClick={goBack} src={BackBtn} alt="cream colored left facing arrow" />
            <div className='details'>
                <form className='details-container' data-class="details-container" >
                    <div className='details-img-container' data-class="details-img-container">
                        <img className='detail profile-img' data-class="profile-img" alt="" src={person.picture.large} />
                    </div>
                    <div className='details-container'>
                        <input onChange={handleChange} type="text" className='detail' data-class="details-full_name" name="full_name" value={person.full_name} disabled />
                    </div>
                    <div className='details-container'>
                        <input onChange={handleChange} type="tel" className='detail' data-class="details-phone" name="phone" value={person.phone} disabled />
                    </div>
                    <div className='details-container'>
                        <input onChange={handleChange} type="text" className='detail' data-class="details-email" name="email" value={person.email} disabled />
                    </div>
                    <div className='details-container'>
                        <input onChange={handleChange} type="text" className='detail' data-class="details-dob" name="dob" value={dobDate} disabled />
                    </div>
                </form>
            </div>
        </div>}
        {/* shows the notice if person isn't loaded */}
        {!show &&
        <div className='details-main' data-class="details-main">
            <img className='back-btn' data-class="back-btn" onClick={goHome} src={BackBtn} alt="cream colored left facing arrow" />
            <h2>There are no details to show, please go back to the contact list.</h2>
        </div>
        }
        </>
    )
}

export default Details;