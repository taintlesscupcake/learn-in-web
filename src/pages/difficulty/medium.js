import { Link } from "@nextui-org/react";
import { getPostsByDifficulty } from "../../api/post";
import { useState } from "react";
import { useEffect } from "react";

export default function Popular() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPostsByDifficulty(2).then(setPosts);
    }, []);
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}