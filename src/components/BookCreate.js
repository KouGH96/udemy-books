import { useState } from "react";

function BookCreate({ onBookCreate }) {
    const [title, setTitle] = useState("");
    

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onBookCreate(title);
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                Title
            </label>
            <input value={title} onChange={handleChange}>
            </input>
            <button>
                Create
            </button>
        </form>
    </div>
    )
}

export default BookCreate;