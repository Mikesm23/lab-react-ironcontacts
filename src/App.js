import './App.css';
import React, { useState } from 'react';
import allContacts from './contacts.json';

const firstFive = allContacts.slice(0,6)
const restContacts = allContacts.slice(6)

function App() {

 const [contacts, setContacts] = useState(firstFive)
 
 function handleDelete (id) {
  let deletedContact = contacts.filter((e) => {
    return e.id !== id
  })
  setContacts(deletedContact)
 }

  return (
    <div className="App">
      <h1 className='title'>IronContacts</h1>
      <div className='btn-div'>
        <button className='btn'
        type="button"
        onClick={() => {
          const randomContact = restContacts[Math.round(Math.random() * restContacts.length)];
          const newContacts = JSON.parse(JSON.stringify(contacts));
          newContacts.push(randomContact);
          setContacts(newContacts);
        }}
        >
          Random Contact
        </button>

        <button className='btn'
        type="button"
        onClick={() => {
          const newContacts = JSON.parse(JSON.stringify(contacts)); 
          newContacts.sort((a,b) => {
            const nameA = a.name.toUpperCase();
            const nameB = b.name.toUpperCase();

          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        
          return 0;

          })
          setContacts(newContacts);
        }}
        >
          Sort by Name
        </button>

        <button className='btn'
        type="button"
        onClick={() => {
          const newContacts = JSON.parse(JSON.stringify(contacts)); 
          newContacts.sort((a,b) => {
            return b.popularity - a.popularity
          })
          setContacts(newContacts);
        }}
        >
          Sort by Popularity
        </button>

        <button className='btn'
        type="button"
        onClick={() => {
          const newContacts = JSON.parse(JSON.stringify(contacts)); 
          let filteredOscars = newContacts.filter((e) => {
            return e.wonOscar
          })
          setContacts(filteredOscars);
        }}
        >
          Won Oscar?
        </button>

        <button className='btn'
        type="button"
        onClick={() => {
          const newContacts = JSON.parse(JSON.stringify(contacts)); 
          let filteredEmmys = newContacts.filter((e) => {
            return e.wonEmmy
          })
          setContacts(filteredEmmys);
        }}
        >
          Won Emmy?
        </button>
      </div>    
      <div className='contactsTable'>
        <table>
          <tr className='th'>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Options</th>
          </tr>

          {contacts.map((singleContact) => (
            <tr className='tr'>
            <td className='td'>
              <img className='profileImg' src={singleContact.pictureUrl} alt="contact profile" />
            </td>
            <td className='td'>{singleContact.name}</td>
            <td className='td'>{parseFloat(singleContact.popularity).toFixed(2)}</td>
            {singleContact.wonOscar ? <td className='td'><img className="oscar" src="https://pngimg.com/uploads/academy_awards/academy_awards_PNG8.png" alt="oscar statue"/></td> : <td></td>}
            {singleContact.wonEmmy ? <td className='td'><img className="emmy" src="https://didyouknow.org/wp-content/uploads/Emmy-statuette.jpg" alt="emmy statue"/></td> : <td></td>}
            <td>
              <div className='btns-options'>
                <button className='btn-imdb'
                  type="submit"
                  onclick={singleContact.imdbPage}
                  >
                    IMDB
                  </button>
                        <button className='btn'
                  type="button"
                  onClick={() => {handleDelete(singleContact.id)}}
                  >
                    Delete
                  </button>
              </div>
            </td>
          </tr>
          
          ))}
        </table>
      </div>
      <div className='btn-random-div'>
        <button className='btn-random'
        type="button"
        onClick={() => {
          const randomContact = restContacts[Math.round(Math.random() * restContacts.length)];
          const newContacts = JSON.parse(JSON.stringify(contacts));
          newContacts.push(randomContact);
          setContacts(newContacts);
        }}
        >
          Random Contact
        </button>
      </div>
    </div>
  );
}

export default App;