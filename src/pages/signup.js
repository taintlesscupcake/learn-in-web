import * as auth from "../api/auth";
import push from "next/router";

export default function Signup() {
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <br />
                <label htmlFor="password-confirm">Confirm Password</label>
                <input type="password" id="password-confirm" />
                <br />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const passwordConfirm = form.passwordConfirm.value;
    console.log(name, email, password, passwordConfirm);
    if (password !== passwordConfirm) {
        alert("Passwords do not match");
        return;
    }
    const signup = auth.signup(name, email, password);
    if(!signup) {
        alert("Signup failed");
    }
    else {
        alert("Signup success");
        return push("/");
    }
}