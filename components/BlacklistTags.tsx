import { components } from 'react-select';
import Select from 'react-select/async'
import makeAnimated from 'react-select/animated';
import { colors } from '../styles'
import { MdClose } from "react-icons/md";
import stall from '../functions/stall';
import { Anime,SubTag,Tag }from 'types/typings';

interface ReturnTag {
    averageRatings: number
    value: string
    label: string
}

interface Props {
  
    onCreate?:(tagString:string)=>any
    onChange?:(tags:ReturnTag[])=>any
    initialTags:Tag[]
}

export default ( {onCreate,initialTags,onChange}:Props) => {

    const DropdownIndicator = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <div />
            </components.DropdownIndicator>
        );
    };

    {/* const IndicatorSeparator = ({ props }) => {    
        return <div />;
    } */}
    /* Above code is to remove the line at the box-edge */
    

    const MultiValueRemove = (props) => {
        return (
            <components.MultiValueRemove {...props}>
                <MdClose />
            </components.MultiValueRemove>
        )
    }

    const animated = makeAnimated();

    const styles = {
        control: (currentStyles, state) => ({
            ...currentStyles,
            border: 'none',
            borderRadius: 0,
            borderBottom: '2.5px solid #FF552B',
        }),
        multiValue: (currentStyles, state) => ({
            ...currentStyles,
            backgroundColor: `${colors.primary}`,
            borderRadius: 50,
        }),
        multiValueLabel: (currentStyles, state) => ({
            ...currentStyles,
            color: 'white',
            /* fontWeight: 400, */
        }),
        multiValueRemove: (currentStyles, state) => ({
            ...currentStyles,
            color: '#fff',
            borderRadius: '50%',
            alignSelf: 'center',
            justifySelf: 'center',
            height: '1.4em',
            width: '1.4em',
            margin: 2,
            ':hover': {
                color: `${colors.primary}`,
                backgroundColor: '#fff'
            },
        })
    }

    const renameOptions = (option: Array<Tag>): Array<ReturnTag> => {

        return option.map(({name, id, ...obj})=> ({
            label: name,
            value: id,
            ...obj
        }))
    }

    return (
        <>
            <Select
                name='sweets'
                isMulti
                loadOptions={async (inputValue, callback) => {
                    await stall()
                    return callback(renameOptions(initialTags))
                }}
                components={{
                    ...animated,
                    DropdownIndicator,
                    MultiValueRemove
                }}
                onCreateOption={onCreate}
                onChange={onChange}
                styles={styles} />
        </>
    )
}