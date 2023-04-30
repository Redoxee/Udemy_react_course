import './SearchBar.css';

import {useState} from 'react';

function SearchBar({requestSearch}) {
    
    const [value, setValue] = useState('');
    const onFormSubmit = (event) => {
        event.preventDefault();
        requestSearch(value);
    };

    return <div className='search-bar'>
        <form onSubmit={onFormSubmit}>
            <label>Search Term</label>
            <input onChange={(event)=>{setValue(event.target.value);}} value={value} />
            <button>search</button>
        </form>
    </div>
}

export default SearchBar;