import style from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../Hook/useQuery';

export function Search() {

    const history = useHistory();

    const query = useQuery();
    const search = query.get('search');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className={style.searchContainer} onSubmit={handleSubmit}>
            <div className={style.searchBox}>
                <input className={style.searchInput}
                    type="text"
                    value={search ?? ""}//cuando este en blanco o cuando tenga un valor 
                    placeholder='Título'
                    aria-label='Search Movies'
                    onChange={(e) => {
                        const value = e.target.value;
                        history.push('/?search=' + value)
                        //con las sentencias de arriba se actualiza el stado y se limpia el campo de busqueda

                    }} />
                <button className={style.searchButton} type="Submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}
