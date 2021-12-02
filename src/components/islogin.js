import { Button } from "@nextui-org/react"
import { useSession } from "next-auth/client"
import Link from "next/link"

function Islogin() {
    if (useSession.accessToken) {
        return (
            <LogoutRedirect />
        )
    } else {
        return (
            <LoginRedirect />
        )
    }
}

function LogoutRedirect() {
    return (
        <div>
            <Link href="/logout"><a className="flex flex-grow justify-evenly">로그아웃</a></Link>
        </div>
    )
}

function LoginRedirect () {
    return (
        <div>
            <Link href="/login"><a className="flex flex-grow justify-evenly">로그인</a></Link>
            <Link href="/signup"><a className="flex flex-grow justify-evenly">회원가입</a></Link>
        </div>
    )
}



export default Islogin