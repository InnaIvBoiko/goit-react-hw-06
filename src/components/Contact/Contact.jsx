import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

export default function Contact({contact: {id, name, number}, onDelete}) {
    return (
        <div className={css.container}>
            <ul className={css.list}>
                <li className={css.item}>
                    {<FaUser size={16} />}
                    <p>{name}</p>
                </li>
                <li className={css.item}>
                    {<FaPhone size={16} />}
                    <p>{number}</p>
                </li>     
            </ul>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </div>
    );
}