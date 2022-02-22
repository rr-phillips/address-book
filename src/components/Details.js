import React from 'react';
import { format } from 'date-fns';

import '../css/Details.scss';

const Details = ({person, onChange, onSubmit}) => {
    let dobDate = format(new Date(person.dob.date), "dd-MM-yyyy");
    let fullName = person.name.first + ' ' + person.name.last;

    const handleChange = (event) => {
        const name = event.target.name;
        if(name == 'fullName') {
            
        }
        const value = event.target.value;
        onChange(name, value);
    }
    return (
        <form className='details-container' onSubmit={onSubmit}>
            <div className='details-img-container'>
                <img className='details profile-img' alt="" src={person.picture.large} />
            </div>
            <div className='details-container'>
                <input onChange={handleChange} type="text" className='details' name="full_name" value={fullName} />
            </div>
            <div className='details-container'>
                <input onChange={handleChange} type="tel" className='details' name="person.phone" value={person.phone} />
            </div>
            <div className='details-container'>
                <input onChange={handleChange} type="text" className='details' name="person.email" value={person.email} />
            </div>
            <div className='details-container'>
                <input onChange={handleChange} type="text" className='details' name="person.dob" value={dobDate} disabled />
            </div>
            <input type="submit" value="Update" className="submit-btn" />
        </form>
    )
}

export default Details;