import { logout } from "../api/auth";
import { useRouter } from "next/router";


export default function Logout () {
    const router = useRouter();
    logout();
    router.push("/");
    return <div>Logging out...</div>;
}
