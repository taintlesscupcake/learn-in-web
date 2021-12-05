import { searchPost } from "../api/post/post";
import { useState } from "react";

export default function Search() {
    const handleSubmit =  async (e) => {
        e.preventDefault();
        const search = await searchPost(e.target.search.value);
        console.log(search)
        setResult(search);
    }

    const [result, setResult] = useState([]);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="search" id="search" placeholder="Search Something..."></input>
                <button type="submit">Search</button>
            </form>
            <div>
                <h1>Search Result</h1>
                {result.map((post) => {
                    return (
                        <div>
                            <h2>{post.title}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}