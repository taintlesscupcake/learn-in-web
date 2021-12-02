import { Button, Link } from "@nextui-org/react";
import { getPosts } from "../api/post";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Popular() {
    const [posts, setPosts] = useState([]);
    const router = useRouter();
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
                        <a onClick={() => router.push(`/post/${post.id}`)} className="cursor-pointer transition
                        duration-100 transform hover:text-white text-2xl">
                            <a>{post.title}</a>
                        </a>
                        <span className="float-right">{DateType(post.createdAt)}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}