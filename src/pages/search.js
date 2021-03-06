import { searchPost } from "../api/post/post";
import { useState } from "react";
import { SearchIcon } from "@heroicons/react/outline";
import { Link } from "@nextui-org/react";

export default function Search() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const search = await searchPost(e.target.search.value);
        setResult(search);
    }

    const [result, setResult] = useState([]);

    return (
        <div className=" ml-10 mr-10">
            <form onSubmit={handleSubmit}>
                <input name="search" id="search" placeholder="Search Something..." className="w-[90%] h-10 text-xl"></input>
                <button type="submit">
                    <SearchIcon className="h-10 ml-2 -mb-3 rounded-full border-black border-2 p-1" />
                </button>
            </form>
            <div>
                <h1 className="text-2xl font-bold">Search Result</h1>
                {result.map((post) => {
                    return (
                        <Link href={`/post/${post.id}`}>
                            <h2 className="text-xl">{post.title}</h2>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}