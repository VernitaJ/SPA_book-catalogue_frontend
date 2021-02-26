import React, { useState, useEffect } from "react";

const EMAIL_LIST = "https://196wc.sse.codesandbox.io/";

const SignUpMenu = props => {
  const initialFormState = { name: "", surname: "", email: "" };
  const [user, setUser] = useState(initialFormState);
  const [users, setUsers] = useState([]);

  const onChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    fetch(EMAIL_LIST)
      .then(response => response.json())
      .then(users => setUsers(users))
      .catch(err => console.error(err));
  }, []);

  const addUser = subscriber => {
    console.log("there");
    fetch(EMAIL_LIST, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify(subscriber)
    })
      .then(response => response.json())
      .then(() => {
        setUsers([...users, subscriber]);
      })
      .catch(err => {
        console.log(err.message);
      });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!user.name || !user.surname || !user.email) {
      alert("Please fill all info");
    } else {
      addUser(user);
      setUser(initialFormState);
      alert("We will send you all the books you love!");
    }
  };

  return (
    <div>
      <form className="subscribe" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={user.name} onChange={onChange} />
        <label>Surname</label>
        <input
          type="text"
          name="surname"
          value={user.surname}
          onChange={onChange}
        />
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={onChange}
        />
        <button id="click">Share books with me!</button>
      </form>
    </div>
  );
};

export default SignUpMenu;
