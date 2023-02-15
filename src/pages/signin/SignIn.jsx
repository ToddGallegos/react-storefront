import React from 'react';
import "./signin.css"

export default function SignIn(props) {

  const signIn = async (event) => {
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;

    const reqBody = {
      username: username,
      password: password
    }

    const response = await fetch('http://localhost:5000/meanmugsapi/signin', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(reqBody)
    });
    const data = await response.json();
    console.log(data)
    props.setUser(data.user)
    alert(data.message)
  }

  return (
    <div className="signInContainer">
      <h1>Sign In</h1>
      <h3>{(props.user === []) ? props.user.username +" logged in": "test"}</h3>
      <form onSubmit={signIn}>
        <label htmlFor="username">Username: </label>
        <input autoFocus="True" type="text" name="username" id="username" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button id="signupSubmit" type="submit">Sign In</button>
      </form>
    </div>
  )
}
