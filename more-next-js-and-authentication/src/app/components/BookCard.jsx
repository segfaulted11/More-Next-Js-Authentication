import Link from "next/link";

const BookCard = ({book}) => {
    return (
<div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{book.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="justify-end card-actions">
        <Link href={`books/${book.id}`}>
      <button className="btn btn-primary">Book Details</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default BookCard;