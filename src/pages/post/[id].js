import { useRouter } from "next/dist/client/router"
import { getPostbyId } from "../../api/post"
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function Post() {
    const router = useRouter()

    const [post, setPost] = useState({})

    useEffect(() => {
        if (!router.isReady) return;
        const { id } = router.query
        getPostbyId(id).then(res => {
            setPost(res)
        })
    }, [router.isReady]);

    console.log(post);

    const [value, setValue] = useState("c");

    const [code, setCode] = useState("");

    const runCode = () => {
        Runner.run(code, value);
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.explain}</p>
            <p>{post.testinput}</p>
            <p>{post.testoutput}</p>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="c">c</option>
                <option value="cpp">cpp</option>
                <option value="js">javascript</option>
            </select>
            <CodeEditor
                value={code}
                language={value}
                placeholder="Please Enter the Code."
                onChange={(e) => setCode(e.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily:
                        "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                }}
            />
            <Button onClick={runCode}>Run</Button>
            <p>{post.example}</p>
        </div>
    )
}