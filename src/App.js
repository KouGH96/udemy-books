import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App () {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return {
                    ...book,
                    title: newTitle
                }
            }
            return book;
        })
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            if (book.id !== id ) {
                return book;
            }
        })
        setBooks(updatedBooks);
    }
    const handleCreateBook = (title) => {
        const newBook = [
            ...books,
            {
                id: books.length + 1,
                title: title
            }
        ]
        setBooks(newBook);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}/>
            <BookCreate onBookCreate={handleCreateBook} />
        </div>
    )
}

export default App;