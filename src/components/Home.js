import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

import List from './List';
import Loading from './Loading';

import '../css/Home.scss';


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    if(!localStorage.getItem('contacts')) {
      fetch("https://randomuser.me/api/?results=50&inc=name,phone,email,dob,phone,picture")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setContacts(result.results);
            localStorage.setItem('contacts', JSON.stringify(result.results));
          },
          (error) => {
            setIsLoaded(true);
            alert(error);
          }
        )
    } else {
      setIsLoaded(true);
      setContacts(JSON.parse(localStorage.getItem('contacts')));
    }
  }
  , []);

  return (
    <>
      <div className='main'>
          {isLoaded && <List contacts={contacts} />}
          {!isLoaded && 
            <div className='loading-main'>
              <Loading />
            </div>
          }
      </div>
    </>
  )
}