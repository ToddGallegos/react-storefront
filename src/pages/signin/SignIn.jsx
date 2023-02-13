import React from 'react';
import "./signin.css"

export default function SignIn() {
  const signIn = async (event) => {
    const username = event.target.username.value;
    const password = event.target.password.value;

    const reqBody = {
      username: username,
      password: password
    }

    const url = 'http://localhost:5000/meanmugsapi/signin'
    const options = {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": 'application/json'
      }
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data)
  }



  return (
    <div className="signInContainer">
      <h1>Sign In</h1>
      <form method="post">
        <label htmlFor="username">Username: </label>
        <input autoFocus="True" type="text" name="username" id="username" />
        <label htmlFor="password">Password: </label>
        <input type="password" name="password" id="password" />
        <button onClick={signIn} id="signupSubmit" type="submit">Submit</button>
      </form>
    </div>
  )
}
