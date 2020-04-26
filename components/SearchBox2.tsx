import { components } from 'react-select';
import Select from 'react-select/async'
import makeAnimated from 'react-select/animated';
import { FaSearch } from 'react-icons/fa';
import stall from '../functions/stall';

export default () => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];


    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <FaSearch />
            </components.DropdownIndicator>
        );
    };

    const animated = makeAnimated();

    const styles = {
        control: (currentStyles) => ({
            ...currentStyles,
            border: '2.5px solid #FF552B',
        })
    }

    return (
        <>
            <Select
                default
                loadOptions={async (inputValue, callback) => {
                    await stall()
                    return callback(options)
                }}
                name='sweets'

                components={{
                    ...animated,
                    DropdownIndicator
                }}
                styles={styles} />
        </>
    )
}