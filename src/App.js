import React from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import "./styles.css";
import HomeView from "./Components/view/HomeView";
import AboutView from "./Components/view/AboutView";
import RegisterView from "./Components/view/RegisterView";
import AllBooksView from "./Components/view/AllBooksView";
import BookView from "./Components/view/BookView";
import { useBookBackend } from "./Components/state/use-book-backend";
import Loading from "./Components/component/Spinner";

const App = ({ match }) => {
  // let { isbn } = useParams();
  const { books, isLoading } = useBookBackend();

  const LoadPage = () => {
    console.log(isLoading);
    if (isLoading) {
      return <Loading />;
    } else {
      return <AllBooksView books={books} />;
    }
  };

  return (
    <div className="App">
      <Router>
        <h1 className="app__heading">BookCatalogue</h1>
        <ul className="app__navbar-list">
          <li>
            <NavLink className="app__navbar-item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="app__navbar-item" to="/books">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink className="app__navbar-item" to="/aboutus">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink className="app__navbar-item" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/books" component={() => LoadPage()} />
        <Route exact path="/aboutus" component={AboutView} />
        <Route exact path="/register" component={RegisterView} />
        <Route exact path="/:isbn/view" component={BookView} />
      </Router>
    </div>
  );
};

export default App;
