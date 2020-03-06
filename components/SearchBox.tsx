import { colors } from '../styles';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

const SearchBox = (props) => {
    const [search, setSearch] = useState('');

    return <>
            <form className='form'>
            <IconContext.Provider value={{ style: {fontSize: '18px'} }}>
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
                font-size: 15px;
                display: inline-block;
            }
            
            .search-input {
                width: 250px;
                height: ${props.height};
                padding-left: 15px;
                border: 2px solid ${colors.primary};
                border-radius: 25px 50px 50px 25px;
                font-weight: 500;
                color: ${colors.primary};
                transition: all 1s;
            }

            .search-input:focus {
                background: ${colors.grey};
            }

            .search-button {
                position: absolute;
                top: 0;
                right: 0;
                height: ${props.height};
                width: ${props.height};
                border-radius: 50%;
                border: none;
                background: transparent;
                color: ${colors.primary};
                transition: all 0.5s;
            }

            .search-button:hover {
                opacity: 0.7;
            }
            `}
            </style>
            </>
}

export default SearchBox