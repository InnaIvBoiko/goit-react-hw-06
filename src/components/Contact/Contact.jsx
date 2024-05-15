import { useDispatch } from 'react-redux';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import css from './Contact.module.css';


export default function Contact({ contact: { id, name, number }, deleteContact }) {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
    };
    
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
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}