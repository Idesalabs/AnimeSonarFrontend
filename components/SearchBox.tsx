import { colors } from '../styles';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

const SearchBox = (props) => {
    const [search, setSearch] = useState('');

    return <>
        <form className='form'>
            <IconContext.Provider value={{ style: { fontSize: 'calc(10px + .8vmin)' } }}>
                <input name='search-box' placeholder="Search..." value={search} onChange={event => {
                    setSearch(event.target.value)
                }} className="search__input" />
                <button type="submit" className="search__button"><FaSearch /></button>
            </IconContext.Provider>
        </form>
        <style jsx>
            {`
            *:focus {
                outline: none;
            }

            ::placeholder {
                color: ${colors.primary};
                opacity: 0.7;
            }

            .form {
                position: relative;
                font-size: calc(8px + .8vmin);
                display: flex;
            }
            
            .search__input {
                width: ${props.width};
                padding-left: 10px;
                height: ${props.height};
                border: 1.5px solid ${colors.primary};
                border-radius: 5px;
                font-weight: 500;
                color: ${colors.primary};
            }

            .search__button {
                position: absolute;
                top: 2px;
                right: 2px;
                height: calc(${props.height} - 4px);
                width: ${props.height};
                border-radius: 50%;
                border: none;
                background: #fff;
                color: ${colors.primary};
                transition: all 0.2s;
            }

            .search__button:hover {
                opacity: 0.7;
            }
            `}
        </style>
    </>
}

export default SearchBox