import Select, { components } from 'react-select';
import makeAnimated from 'react-select/animated';
import { FaSearch } from 'react-icons/fa';

export default () => {
    
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry'},
        { value: 'vanilla', label: 'Vanilla' },
      ];

      
      const DropdownIndicator = (props) => {
          return (
              <components.DropdownIndicator {...props}>
            <FaSearch/>
          </components.DropdownIndicator>
        );
    };
    
    const animated = makeAnimated();

    const styles = {
        control: (currentStyles) => ({
            ...currentStyles,
            border: 'none',
            borderRadius: 0,
            borderBottom: '2.5px solid #FF552B',
        })
    }

    return (
        <>
        <Select 
        options={options}
        name='sweets'
        isMulti
        components={{
            ...animated,DropdownIndicator}}
        styles={styles} />
        </>
    )
}