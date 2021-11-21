import { useRouter } from "next/dist/client/router"
import { getPostbyId } from "../../api/post"


export default function Post() {
    const router = useRouter()
    const { id } = router.query
    const post = getPostbyId(id)
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}