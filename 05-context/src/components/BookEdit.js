import {useState} from 'react';
import useBooksContext from '../hooks/use-books-context';

function BookEdit({book, onSetTitle}) {
    const [title, setTitle] = useState(book.title);

    const {editBookById} = useBooksContext();

    const onSubmit = (event)=>{
        event.preventDefault();
        editBookById(book.id, title)
        onSetTitle(book.id);
    };

    return <form className="book-edit" onSubmit={onSubmit}>
            <label>Title</label>
            <input className='input' onChange={(event)=>setTitle(event.target.value)} value={title}/>
            <button className='button is-primary' onClick={onSubmit}>save</button>
        </form>
}

export default BookEdit;