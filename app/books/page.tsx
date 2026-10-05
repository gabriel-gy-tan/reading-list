import BookCard from "../components/BookCard";
import type { Book } from "../types/book";

const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A novel set in the Roaring Twenties.",
    status: "Read",
  },
    {
    id: "2",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel about surveillance and totalitarian control.",
    status: "Reading",
  },
  {
    id: "3",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy adventure following Bilbo Baggins on an unexpected journey.",
    status: "Want to Read",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic romance exploring love, class, and social expectations.",
    status: "Read",
  },
  {
    id: "5",
    title: "Dune",
    author: "Frank Herbert",
    description: "A science fiction epic about power, politics, and survival on a desert planet.",
    status: "Reading",
  },
  {
    id: "6",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A coming-of-age story exploring justice, prejudice, and morality.",
    status: "Want to Read",
  },
  {
    id: "7",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A coming-of-age novel following Holden Caulfield through New York City.",
    status: "Read",
  },
  {
    id: "8",
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A young shepherd travels in search of treasure and discovers his purpose.",
    status: "Reading",
  },
  {
    id: "9",
    title: "Atomic Habits",
    author: "James Clear",
    description: "A practical guide to building good habits and breaking bad ones.",
    status: "Want to Read",
  },
];


export default function DisplayBooks() {


  return (
    <div>
      
      <p>List of books will be displayed here.</p>

      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}