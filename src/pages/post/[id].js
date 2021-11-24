import { useRouter } from "next/dist/client/router"
import { getPostbyId } from "../../api/post"
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "semantic-ui-react";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function Post() {
    const router = useRouter()
    const { id } = router.query
    const post = getPostbyId(id)

    const [value, setValue] = useState("c");

    const [code, setCode] = useState("");

    const runCode = () => {
        Runner.run(code, value);
    }

    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
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
        </div>
    )
}