import React from "react";
import "./signup.css";

export default function SignUp() {
    
    const signUp = async (event) => {
        event.preventDefault();
        const username = event.target.elements["username"].value;
        const email = event.target.elements["email"].value;
        const password = event.target.elements["password"].value;
        const confirmPassword = event.target.elements["passwordCheck"].value;

        const reqBody = {
            username: username,
            email: email,
            password: password,
        };

        if (password !== confirmPassword) {
            alert("passwords don't match");
        } else {
            const response = await fetch(
                "http://localhost:5000/meanmugsapi/signup",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(reqBody),
                }
            );
            const data = await response.json();
            console.log(data);
            alert(data.message)
        }
    };

    return (
        <div className="signUpContainer">
            <h1>Sign Up</h1>
            <form onSubmit={signUp}>
                <label htmlFor="username">Username: </label>
                <input
                    autoFocus="True"
                    type="text"
                    name="username"
                    id="username"
                />
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" />
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" id="password" />
                <label htmlFor="passwordCheck">Confirm Password: </label>
                <input
                    type="password"
                    name="passwordCheck"
                    id="passwordCheck"
                />
                <button id="signupSubmit" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
