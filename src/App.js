import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App () {
    const [book, setBooks] = useState([]);

    const handleCreateBook = (title) => {
        const newBook = [
            ...book,
            {
                id: book.length + 1,
                title: title
            }
        ]
        setBooks(newBook);
        console.log('book created');
        console.log(book.length + 1);
    };

    return (
        <div>
            <BookCreate onBookCreate={handleCreateBook} />
        </div>
    )
}

export default App;