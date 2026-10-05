import BookCard from "../components/BookCard";

export default function DisplayBooks() {
  return (
    <div>
      <h1>Books</h1>
      <p>List of books will be displayed here.</p>

      <BookCard 
        book={{ title: "The Great Gatsby", author: "F. Scott Fitzgerald", status: "Read" }}
      />
      <BookCard 
        book={{ title: "To Kill a Mockingbird", author: "Harper Lee", status: "Unread" }}
      />
    </div>
  );
}