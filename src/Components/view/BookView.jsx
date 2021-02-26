import React, { useState, useEffect } from "react";
import BookUI from "../component/BookUI";
import { Link } from "react-router-dom";

const BookView = ({ match }) => {
  // console.log("hej", props.books);
  const [book, setBook] = useState({});

  const BACKEND_ROOT = "https://b8tbu.sse.codesandbox.io/";
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(BACKEND_ROOT);
        const data = await res.json();
        const book = data.filter(book => book.isbn === match.params.isbn)[0];
        setBook(book);
      } catch (ex) {}
    };
    // const selectedBook = props.books
    load();
  }, [match.params.isbn]);

  return (
    <div>
      <BookUI book={book} />
      <Link className="book-view__button-link" to={`/`}>
        Back home
      </Link>
    </div>
  );
};

export default BookView;
