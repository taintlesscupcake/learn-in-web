import { Link } from "@nextui-org/react"
import router from "next/router"
import { Button } from "semantic-ui-react"

export default function Nav() {
    const moverun = () => {
        router.push("/run")
    }
    return (
        <nav className="navbar">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20">
                <a herf="" className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-blue-500">난이도 하</a>
                <Button onClick={moverun} className="cursor-pointer transition
                        duration-100 transform hover:scale-125 hover:text-white
                        active:text-blue-500">실행하기</Button>
                <a herf="" className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-blue-500">난이도 중</a>
                <a herf="" className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-blue-500">난이도 상</a>
                <a herf="" className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-blue-500">북마크</a>
            </div>
        </nav>
    )
}