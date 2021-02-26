import React from "react";

const BookUI = props => {
  return (
      <div className="book-view__book-container" key={props.book.isbn}>
        <h2 className="book-view__heading">{props.book.title}</h2>
        <a href={props.book.url} target="_blank" rel="noopener noreferrer">
          <img
            className="book-view__image"
            src={props.book.url}
            alt={props.book.alt}
          />
        </a>
        <p className="book-view__text">
          {props.book.text}
          {/* <div className="like-button">
          <button
          className={liked ? "liked" : "not-liked"}
          title="Like"
          onClick={likey}
        />
</div> */}
        </p>
        <h5 className="book-view__isbn">ISBN: {props.book.isbn}</h5>
      </div>
  );
};

export default BookUI;
