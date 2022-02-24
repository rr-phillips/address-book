import React, { useState, useEffect } from 'react';

import List from './List';
import Loading from './Loading';

import '../css/Home.scss';


export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const compareStrings = (a, b) => {
      return a > b ? 1 : a < b ? -1 : 0
    }
  
    const compare = (a, b) => {
      return a.name.last === b.name.last ?
        compareStrings(a.name.first, b.name.first) :
        compareStrings(a.name.last, b.name.last);
    }
    if(!localStorage.getItem('contacts')) {
      fetch("https://randomuser.me/api/?results=50&nat=us&inc=name,phone,email,dob,phone,picture&seed=nuvalence")
        .then(res => res.json())
        .then(
          (result) => {
            result.results.sort(compare);
            setContacts(result.results);
            localStorage.setItem('contacts', JSON.stringify(result.results));
            setIsLoaded(true);
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