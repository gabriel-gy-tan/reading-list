import { createBook } from "../new/actions";


export default function NewBook() {

    return (
        <form action={createBook} className="p-4 max-w-md mx-auto form flex flex-col gap-4">
            <input placeholder="Book Title" name="title"/>
            <input placeholder="Author" name="author" />
            <textarea placeholder="Description" name="description"/>
            <select name="status">
                <option value="Reading">Reading</option>
                <option value="Completed">Completed</option>
                <option value="WantToRead">Want to Read</option>
            </select>

            <button type="submit">
                Create Book
            </button>
        </form>

        
    );
}