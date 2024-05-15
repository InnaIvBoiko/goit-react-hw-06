import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

export default function SearchBox() {
    const dispatch = useDispatch;
    const filter = useSelector(selectNameFilter);

    const handleFilterChange = event => {
        console.log(event.currentTarget.value)
    dispatch(changeFilter(event.target.value));
  };

    return (
        <div className={css.search}>
            <p>Find contacts by name</p>
            <input
                className={css.input}
                type='text'
                name='filters'
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    );
}