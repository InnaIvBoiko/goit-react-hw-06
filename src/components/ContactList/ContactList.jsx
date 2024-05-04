import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';

export default function ContactList({contacts, onDelete}) {
    return (
        <ul className={css.list}>
            {contacts.map((contact) =>
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete} />
                </li>
            )}
        </ul>
    );
}