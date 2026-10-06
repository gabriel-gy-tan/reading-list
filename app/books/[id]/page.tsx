import Link from "next/link";
import { db } from "../../../src/prisma/db";

export default async function BookPage({ params }: {
    params: Promise<{id: string}>
}) {
    const {id} = await params;
    const bookId = Number(id);
    const book = await db.orm.public.Book.where({ id: bookId }).first();
    if (!book) {
        return <p>Book not found</p>;
    }

    return (
        <div>
            <h1>Title: {book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <p>Status: {book.status}</p>

            <button>
                <Link href={`/books/${book.id}/chapters/new`}>Add Chapter</Link>
            </button>
        </div>
    )
}