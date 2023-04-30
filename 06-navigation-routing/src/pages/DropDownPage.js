import { useState } from 'react';
import DropDown from '../components/Dropdown';

function DropDownPage() {
  const items = [
    { 
      label : 'What is red?',
      value :'red',
    },
    { 
      label : 'What is blue?',
      value:'blue',
    },
    { 
      label : 'What is yellow?',
      value:'yellow',
    }
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  return <DropDown items= {items} value = {selectedItem} onChange = {setSelectedItem}/>;
}

export default DropDownPage;
