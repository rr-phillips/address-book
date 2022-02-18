import React from 'react';

const Details = ({person}) => {
    return (
        <div className='details-container'>
            <div className='details-img-container'>
                <img className='details profile-img' alt="" src={person.picture.large} />
            </div>
            <div className='details-container'>
                <h2 className='details first-name'>
                    {person.name.first}
                </h2>
                <h2 className='details last-name'>
                    {person.name.last}
                </h2>
            </div>
            <div className='details-container'>
                <p className='details phone'>
                    {person.phone}
                </p>
            </div>
            <div className='details-container'>
                <p className='details email'>
                    {person.email}
                </p>
            </div>
            <div className='details-container'>
                <p className='details dob'>
                    {person.dob.date}
                </p>
                <p className='details age'>
                    {person.dob.age}
                </p>
            </div>
        </div>
    )
}

export default Details;