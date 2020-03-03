import { colors } from '../styles';
import { useState } from 'react';
import { IconContext } from "react-icons";
import { FaSearch } from 'react-icons/fa';

const SearchBox = (props) => {
    const [search, setSearch] = useState('');

    return <div style={{ display: 'flex', justifyContent: 'start' }}>
        {
            <>
            <form className='form'>
            <IconContext.Provider value={{ style: { verticalAlign: 'baseline', fontSize: '17px'} }}>
                <input name='search-box' placeholder="Search" value={search} onChange={event => {
                        setSearch(event.target.value)
                    }} className="search-input" />
                <button type = "submit" className="search-button"><FaSearch/></button>
            </IconContext.Provider>
            </form>
            <style jsx>
            {`
            .form {
                font-size: 14px;
                user-select: none;
                width: 250px;
                position: relative;
            }
            
            .search-input {
                border: 2px solid #ff552b36;
                border-radius: ${props.borderRadius};
                width: 100%;
                color: ${colors.primary};
                padding: ${props.padding};
                transition: all 0.5s;
                height: 40px;
            }

            .search-input:focus {
                border: 2px solid ${colors.primary};
            }
    
            .search-button {
                font-weight: 700;
                border-radius: ${props.borderRadius};
                //border: 1.5px solid ${colors.primary};
                border: none;
                background: transparent;
                color: ${colors.primary};
                text-decoration: none;
                cursor:pointer;
                padding: ${props.padding};
                transition: all 0.2s;
                position: absolute;
                right: 0;
                height: 40px;
            }
            
            .search-button:hover {
                background: ${colors.gradient};
                color: #fff;
            }
            
            *:focus {
                outline: none;
            }
            `}
                        </style>
                    </>
        }
    </div>
}

export default SearchBox