import React, { useState, useEffect } from 'react';

import List from './List';


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50&inc=name,phone,email,dob,phone,picture")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setContacts(result.results);
        },
        (error) => {
          setIsLoaded(true);
          alert(error);
        }
      )
  }, []);

  return (
    <>
      <div className='main'>
          <List contacts={contacts} />
      </div>
    </>
  )
}