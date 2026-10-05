export default function BookCard({ book }: { book: { title: string; author: string; status: string } }) {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Status: {book.status}</p>
        </div>
    );
}