import { useRouter } from "next/router";
import * as auth from "../api/auth";

export default function Login() {
    const router = useRouter();

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const login = await auth.login(email, password);
        if(!login) {
            alert("Login failed");
        }
        return router.push("/");
    }
}

