import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App () {
    const [book, setBooks] = useState([]);

    const handleCreateBook = (title) => {
        console.log('Need to add book with', title);
    };

    return (
        <div>
            <BookCreate onBookCreate={handleCreateBook} />
        </div>
    )
}

export default App;