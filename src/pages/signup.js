import * as auth from "../api/auth";
import { useRouter } from "next/router";

export default function Signup() {

    const router = useRouter();

    return (
        <div className="flex h-auto">
            <div className="w-auto inline-block p-3 rounded-lg m-auto">
                <h1 className="font-bold text-4xl text-center">회원가입</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" id="email" placeholder="email" className="my-2 rounded-sm" />
                    <br />
                    <input type="text" id="name" placeholder="nickname" className="my-2 rounded-sm" />
                    <br />
                    <input type="password" id="password" className="my-2 rounded-sm" placeholder="password" />
                    <br />
                    <input type="password" id="passwordConfirm" className="my-2 rounded-sm" placeholder="password confirm" />
                    <br />
                    <button type="submit" className="mt-2 px-4 py-2 text-base font-semibold text-white transition duration-500 transform bg-blue-300 rounded-lg hover:shadow-lg focus:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-300 motion-reduce:transform-none hover:scale-105 tramsform">Signup</button>
                </form>
            </div>
        </div>

    );

    async function handleSubmit(event) {
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
        const signup = await auth.signup(name, email, password);
        if (!signup) {
            alert("Signup failed");
        }
        else {
            alert("Signup success");
            return router.push("/");
        }
    }
}

