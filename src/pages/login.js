import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";
import * as auth from "../api/auth";

export default function Login() {
    const router = useRouter();

    return (
        <div className="flex h-auto">
            <div className="w-auto inline-block p-3 rounded-lg m-auto">
                <h1 className="font-bold text-4xl text-center">로그인</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" id="email" placeholder="email" className="my-2 rounded-sm"/>
                    <br />
                    <input type="password" id="password" className="my-2 rounded-sm" placeholder="password" />
                    <br />
                    <button type="submit" className="mt-2 px-4 py-2 text-base font-semibold text-white transition duration-500 transform bg-blue-300 rounded-lg hover:shadow-lg focus:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-300 motion-reduce:transform-none hover:scale-105 tramsform">Login</button>
                </form>
            </div>
        </div>
    );

    async function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const login = await auth.login(email, password);
        if (!login) {
            alert("Login failed");
        }
        else {
            alert("Login success");
            return router.push("/");
        }
    }
}

