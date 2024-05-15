import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';

import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    console.log(contacts)
    const filter = useSelector(selectNameFilter);
    console.log(filter)
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <ul className={css.list}>
            {visibleContacts.map((contact) => {
                return(
                <li key={contact.id}>
                    <Contact contact={contact} />
                </li>
            )})}
        </ul>
    );
}