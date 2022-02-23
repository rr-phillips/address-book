import React from 'react';
import { format } from 'date-fns';
import { useLocation, useNavigate } from 'react-router-dom';

import '../css/Details.scss';

const Details = () => {
    const navigate = useNavigate();
    const person = useLocation().state.person;
    let dobDate = format(new Date(person.dob.date), "dd-MM-yyyy");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        person[name] = value;
        // onChange(name, value);
    }

    const goBack = () => {
        navigate(-1);
    }
    return (
        <>
        <div className="details-main">
            <p className='back-btn' onClick={goBack}>Back to List</p>
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
        </div>
        </>
    )
}

export default Details;