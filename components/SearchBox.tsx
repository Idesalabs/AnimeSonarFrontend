import { colors } from '../styles';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

const SearchBox = (props) => {
    const [search, setSearch] = useState('');

    return <>
            <form className='form'>
            <IconContext.Provider value={{ style: {fontSize: 'calc(10px + .8vmin)'} }}>
                <input name='search-box' placeholder="Search..." value={search} onChange={event => {
                        setSearch(event.target.value)
                    }} className="search-input" />
                <button type = "submit" className="search-button"><FaSearch/></button>
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
            
            .search-input {
                width: ${props.width};
                padding: ${props.padding};
                border: 2px solid ${colors.primary};
                border-radius: 10px 30px 30px 10px;
                font-weight: 500;
                color: ${colors.primary};
                //transition: all 1s;
            }

            .search-button {
                position: absolute;
                top: 2px;
                right: 2px;
                padding: ${props.padding};
                width: ${props.height};
                border-radius: 0px 30px 30px 0px;
                border: none;
                background: #fff;
                color: ${colors.primary};
                transition: all 0.2s;
            }

            .search-button:hover {
                opacity: 0.7;
            }
            `}
            </style>
            </>
}

export default SearchBox