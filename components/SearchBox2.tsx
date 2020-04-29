import { components } from 'react-select';
import Select from 'react-select/async'
import makeAnimated from 'react-select/animated';
import { FaSearch } from 'react-icons/fa';
import stall from '../functions/stall';
import { colors } from '../styles';

interface Props {
    onChange: (input: string) => any
    initialData: Array<object>
}

export default (/* {onChange, initialData}: Props */) => {

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

    const Placeholder = props => {
        return <components.Placeholder {...props} />;
      };

    const animated = makeAnimated();

    const styles = {
        control: (currentStyles, state) => ({
            ...currentStyles,
            border: '1.5px solid #FF552B',
            width: '100%',
            maxWidth: 400,
            transition: 'all 0.3s'
        }),
        dropdownIndicator: (currentStyles, state) => ({
            ...currentStyles,
            color: `${colors.primary}`,
            transition: 'all 0.2s',
            ':hover': {
                opacity: 0.7
            },
        }),
        placeholder: (currentStyles, state) => ({
            ...currentStyles,
            color: `${colors.primary}`,
            opacity: 0.7,
            fontWeight: 500,
        }),
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
                /* onInputChange= {onChange} */
                components={{
                    ...animated,
                    DropdownIndicator,
                    Placeholder
                }}
                placeholder={'Search...'}
                styles={styles} />
        </>
    )
}