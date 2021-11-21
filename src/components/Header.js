import {
    HomeIcon,
    SearchIcon,
    UserIcon,
    CubeIcon,
    MailIcon,
    StarIcon
} from "@heroicons/react/outline"
import { useSession } from "next-auth/client"
import HeaderItem from "./HeaderItem"
import Islogin from "./islogin"
import Link from "next/link"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <Link href="/" passHref>
                <div className="flex cursor-pointer transform hover:scale-105">
                    <CubeIcon className="h-20" />
                    <p className="text-7xl font-extrabold" >Learn In Web</p>
                </div></Link>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='STAR' Icon={StarIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
            <Islogin />
        </header>

    )
}

export default Header