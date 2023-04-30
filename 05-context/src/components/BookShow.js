import {useState} from 'react';

import BookEdit from './BookEdit';
import useBooksContext from '../hooks/use-books-context';

function BookShow({book}) {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useBooksContext();
    
    const onSetTitle = (id, newTitle) => {
        setShowEdit(false);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit) {
        content = <BookEdit book={book} onSetTitle={onSetTitle}/>
    }

    return <div className="book-show">
        <img className='book-cover' src={`https://picsum.photos/seed/${book.id}/300/200`} alt="book cover"/>
        <div className='content'>{content}</div>
        <div className="actions">
            <button className='edit' onClick={()=>setShowEdit(!showEdit)}>Edit</button>
            <button className="delete" onClick={()=>deleteBookById(book.id)}>Delete</button>
        </div>
    </div>
}

export default BookShow;