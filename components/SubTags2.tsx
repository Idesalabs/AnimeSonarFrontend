import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { colors } from '../styles'
import { MdClose } from "react-icons/md";

export default () => {
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry'},
        { value: 'vanilla', label: 'Vanilla' },
      ];

      
    const DropdownIndicator = (props) => { 
          return (
            <components.DropdownIndicator {...props}>
            <div/>
          </components.DropdownIndicator>
        );
    };
      
    const IndicatorSeparator = ({ props }) => {
        return <div/>;
    }

    const MultiValueRemove = (props) => {
        return (
            <components.MultiValueRemove {...props}>
                <MdClose/>
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

    return (
        <>
        <Select 
        options={options}
        name='sweets'
        isMulti
        components={{
            ...animated,DropdownIndicator,IndicatorSeparator,MultiValueRemove}}
        styles={styles} />
        </>
    )
}