import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App () {
    const [books, setBooks] = useState([]);

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
        console.log(books);
    };

    return (
        <div className="app">
            <BookList books={books} onDelete={deleteBookById}/>
            <BookCreate onBookCreate={handleCreateBook} />
        </div>
    )
}

export default App;