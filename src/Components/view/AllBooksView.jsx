import React, { useState } from "react";
import AllBooks from "../layout/AllBooks";
// import { useBookBackend } from "../state/use-book-backend";

const HomeView = props => {
  const [search, setSearch] = useState("");
  // const { books } = useBookBackend();
  console.log("ey", props.books);
  // const [books, setBooks] = useBookBackend(book);

  const onChange = event => {
    setSearch(event.target.value);
  };

  const handleInput = event => {
    event.preventDefault();
    setSearch("");
  };

  const filteredBooks = props.books.filter(book => {
    return book.title.toLowerCase().indexOf(search) !== -1;
  });

  return (
    <div>
      <form onSubmit={handleInput}>
        <label className="home__search-label">Search: &nbsp;</label>
        <input
          className="search"
          placeholder="Title"
          type="text"
          onChange={onChange}
          value={search}
        />
      </form>
      <AllBooks books={filteredBooks} />
    </div>
  );
};

export default HomeView;
