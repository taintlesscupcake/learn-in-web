import { Link } from "@nextui-org/react"
import router from "next/router"
import { Button } from "semantic-ui-react"

export default function Nav() {

    const movenew = () => {
        router.push("/new")
    }

    const movelow = () => {
        router.push("/difficulty/low")
    }
    const movemed = () => {
        router.push("/difficulty/medium")
    }
    const movehigh = () => {
        router.push("/difficulty/high")
    }
    return (
        <nav className="navbar">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20">
                <Button onClick={movelow} className="cursor-pointer transition
                        duration-100 transform hover:scale-125 hover:text-black
                        active:text-white">난이도 하</Button>
                <Button onClick={movemed} className="cursor-pointer transition
                        duration-100 transform hover:scale-125 hover:text-black
                        active:text-white">난이도 중</Button>
                <Button onClick={movehigh} className="cursor-pointer transition
                        duration-100 transform hover:scale-125 hover:text-black
                        active:text-white">난이도 상</Button>
                <Button onClick={movenew} className="cursor-pointer transition
                        duration-100 transform hover:scale-125 hover:text-black
                        active:text-white">문제 만들기</Button>
            </div>
        </nav>
    )
}