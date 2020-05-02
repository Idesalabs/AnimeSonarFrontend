import { components } from 'react-select';
import Select from 'react-select/async'
import makeAnimated from 'react-select/animated';
import { FaSearch } from 'react-icons/fa';
import stall from '../functions/stall';
import { colors } from '../styles';
import { useState } from 'react'
import { Anime,SubTag,Tag }from 'types/typings';



interface Props {
    onSelectAnime: (selection: Anime) => any
    // initialData: Array<object>
}

interface nameExists {
    name: string
}

interface ReturnAnime {
    label: string
    description: string
    tags: Tag[]
    subTags: SubTag[]
    id: string
}

export default () => {
    const [search, setSearch] = useState('')
    const [selected, setSelected] = useState('')

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

    const handleInputChange = (inputValue: string) => {
        setSearch(inputValue);
        return inputValue;
    }

    const handleChange = (newValue: any) => {
        setSelected(newValue);
    }

    const renameOptions = (option: Array<Anime>): Array<ReturnAnime> => {

        return option.map(({title, ...obj})=> ({
            label: title,
            ...obj
        }))
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
                onInputChange={handleInputChange}
                onChange={handleChange}
                components={{
                    ...animated,
                    DropdownIndicator,
                }}
                placeholder={'Search...'}
                styles={styles} />
        </>
    )
}