import React, { useState } from "react";
import SignUpMenu from "./SignUpMenu";

const MailingList = props => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [signUp, setSignUp] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    console.log(event.target.id);
    const newState = () =>
      toggleMenu ? setToggleMenu(false) : setToggleMenu(true);
    setToggleMenu(newState);
    signUp ? setSignUp(false) : setSignUp(true);
  };

  return (
    <div>
      <button id="click" className="signup" onClick={handleClick}>
        {signUp ? "Nah..." : "Sign up"}
      </button>
      {toggleMenu ? <SignUpMenu /> : <p />}
    </div>
  );
};

export default MailingList;
