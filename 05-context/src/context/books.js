import { createContext, useCallback, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}) {
    const [books, setBooks] = useState([]);

    const fetchBooks = useCallback(async() => {
        const response = await axios.get('http://localhost:3001/books');
        setBooks(response.data)
    }, 
    []);

    const createBook = async (title) => {
        const response  = await axios.post('http://localhost:3001/books', {
            title
        });

        setBooks([...books, 
            response.data
        ]);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle
        });

        if (response.status !== 200)
        {
            console.log(`error while editing book ${id} response ${response.status} : ${response.statusText}`);
            return;
        }

        setBooks(books.map((book)=> {
            if (book.id !== id)
                return book;
            return {
                ...book,
                ...response.data
            }
        }))
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);

        setBooks(books.filter((book)=>book.id !== id))
    }

    const valueToShare = {
        books,
        fetchBooks,
        createBook,
        editBookById,
        deleteBookById
    }

    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider};
export default BooksContext;