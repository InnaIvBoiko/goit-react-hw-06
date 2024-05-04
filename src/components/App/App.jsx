import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import initialContacts from '../../date/contacts.json';

import css from './App.module.css';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const localContacts = () => {
    const list = localStorage.getItem('CONTACTS');
  return list !== null ?
    JSON.parse(list) :
    initialContacts;
};

export default function App() {
  const [contacts, setContacts] = useState(localContacts);
  const [filter, setFilter] = useState('');

  const addContact = (newContact) => {
    newContact = {
      id: nanoid(),
      ...newContact,
    };
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => { 
    localStorage.setItem('CONTACTS', JSON.stringify(contacts))
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
