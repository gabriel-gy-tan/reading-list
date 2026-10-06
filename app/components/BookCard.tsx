import Link from "next/link";
import { Book } from "../types/book";

export default function BookCard({ book }: { book: Book }) {
    return (
        <div>
            <h1>Title: {book.title}</h1>
            <p>Status: {book.status}</p>
            <Link href={`/books/${book.id}`}>View More</Link>
        </div>
    );
}