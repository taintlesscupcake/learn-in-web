import { Link } from "@nextui-org/react";
import { getPosts } from "../api/post";
import { useState } from "react";
import { useEffect } from "react";

export default function Popular() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts(10).then(setPosts);
    }, []);
    
    const DateType = (date) => {
        console.log(date);
        const dateObj = new Date(date);
        const month = dateObj.toLocaleString("default", { month: "long" });
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        return dateObj.toLocaleString();
    }
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`} className="text-xl">
                            <a>{post.title}</a>
                        </Link>
                        <span className="float-right">{DateType(post.createdAt)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}