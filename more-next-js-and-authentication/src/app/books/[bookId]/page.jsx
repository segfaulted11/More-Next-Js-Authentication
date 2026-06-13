export const generateStaticParams = async() => {
    const res = await fetch(`http://localhost:5000/books`);
    const books = await res.json();
    return books.map((book)=>({
        bookId:book.id
    }))
}

const BookDetailsPage = async ({ params }) => {
  const res = await params;
  const { bookId } = res;

  const booksPromise = await fetch(`http://localhost:5000/books/${bookId}`);
  const book = await booksPromise.json();
  return (
    <div>
      <h2 className="text-center text-3xl">Book datails</h2>
      <p>Id : {bookId}</p>
      <p>Name : {book.title}</p>
      <p>Author : {book.author}</p>
      <p>Genre : {book.genre}</p>
      <p>Price : {book.price}</p>
    </div>
  );
};

export default BookDetailsPage;
