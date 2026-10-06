import BookCard from "../components/BookCard";
import type { Book } from "../types/book";
import { db } from "../../src/prisma/db";
import Link from "next/link";



export default async function DisplayBooks() {

  const books = await db.orm.public.Book.all()
  
  return (
    <div>
      <Link href="/books/new" className="btn btn-primary mb-4">
        Add New Book
      </Link>

      <h1 className="text-2xl font-bold mb-4">Books</h1>
      <p>List of books will be displayed here.</p>

      {books.map((book) => (
        <BookCard key={book.id} book={book} />
                
      ))}
    </div>
  );
}