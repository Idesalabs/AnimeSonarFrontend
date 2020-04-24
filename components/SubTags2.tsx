import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { colors } from '../styles'
import { IoIosCloseCircle } from "react-icons/io";

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
                <IoIosCloseCircle/>
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
        }),
        multiValueLabel: (currentStyles, state) => ({
            ...currentStyles,
            color: 'white',
        }),
        multiValueRemove: (currentStyles, state) => ({
            ...currentStyles,
            color: '#fff',
            ':hover': {
                color: `${colors.primary}`,
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