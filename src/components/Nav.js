import router from "next/router"

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap
            space-x-10 sm:space-x-20">
                <a herf="" className="last:pr-24 cursor-pointer transition 
                        duration-100 transform hover:scale-125 hover:text-white 
                        active:text-blue-500">난이도 하</a>
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