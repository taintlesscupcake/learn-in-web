import * as auth from "../api/auth";
import push from "next/router";

export default function Signup() {
    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
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
    console.log(name, email, password);
    const signup = auth.signup(name, email, password);
    if(!signup) {
        alert("Signup failed");
    }
    else {
        alert("Signup success");
        return push("/");
    }
}