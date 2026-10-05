import { Book } from "../types/book";

export default function BookCard({ book }: { book: Book }) {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <p>Status: {book.status}</p>
        </div>
    );
}