import React from "react";
import { Link } from "react-router-dom";

const AllBooks = props => {
  console.log("props", props);

  // const likey = event => {
  //   liked ? setLiked(false) : setLiked(true);
  // };

  return (
    <div className="home__container">
      {props.books.length > 0 ? (
        props.books.map(book => (
          <div className="home__book-container" key={book.isbn}>
            <Link
              className="home__link"
              to={{
                pathname: `/${book.isbn}/view`,
                state: { isbn: book.isbn }
              }}
            >
              <h2 className="home__book-heading">{book.title}</h2>
              <img className="home__book-image" src={book.url} alt={book.alt} />
            </Link>
            <h5 className="home__book-isbn">ISBN: {book.isbn}</h5>
          </div>
        ))
      ) : (
        <div>
          <h2 className="home_site-heading">Nothing to see here!</h2>
        </div>
      )}
    </div>
  );
};

export default AllBooks;
