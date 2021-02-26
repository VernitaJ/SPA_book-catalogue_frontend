import React from "react";
import Link from "react-router-dom";

const BookLayout = props => {
  console.log("layout", props.children);
  return (
    <div>
      <h2 className="profile-view__heading">Current: {props.book.isbn}</h2>
      <Link to={`/`}>Back home</Link>
    </div>
  );
};

export default BookLayout;
