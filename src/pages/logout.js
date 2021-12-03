import { logout } from "../api/auth";
import { useRouter } from "next/router";


export default function Logout () {
    const handleLogout = () => {
        logout();
        return <div>Logged out. Go to main page.</div>
    }
    
    return handleLogout();
}
