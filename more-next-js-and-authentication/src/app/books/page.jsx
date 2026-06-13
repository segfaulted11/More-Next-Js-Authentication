import BookCard from "../components/BookCard";

const Books = async() => {
        const res = await fetch("http://localhost:5000/books",{next:{revalidate:20}})
        // it will cache the data for 20 seconds, and it will fetch the data after 20 seconds. (ISR ->Incremental Static Regeneration)
    
        const res2 = await fetch("http://localhost:5000/books",{cache:"force-cache"})
        //cache : force-cache -> it will cache the data, and it will not fetch the data on every request. (SSG -> Static Site Generation)

        const res3 = await fetch("http://localhost:5000/books",{cache:"no-store"})
        //cache : no-store -> it will fetch  the data aon every request, and it will not cache the data. (SSR -> Server Side Rendering)

    const books = await res.json();
    return (
        <div>
            <h2 className="text-center font-bold text-3xl">Books Page</h2>
            <p>Total books {books.length}</p>
            <div className="grid grid-cols-3 gap-3">
            {
                books.map((book)=><BookCard key={book.id} book={book}></BookCard>)
            }
            </div>
        </div>
    );
};

export default Books;