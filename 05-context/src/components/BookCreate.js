import { useState } from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookCreate() {
    const [title, setTitle] = useState('');
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };;

    const {createBook} = useBooksContext();

    const onSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    }

    return <div className='book-create'>
        <h3>Add a book!</h3>
        <form onSubmit={onSubmit}>
            <label>Title</label>
            <input className='input' value={title} onInput={handleTitleChange}/>
            <button className='button'>Create</button>
        </form>
    </div>;
}

export default BookCreate;