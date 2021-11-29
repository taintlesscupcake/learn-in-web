import { useRouter } from "next/dist/client/router"
import { getPostbyId } from "../../api/post"
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { run } from "../../api/runner";

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

    const [answer, setAnswer] = useState("asdf");

    const runCode = async function () {
        var result = await run(code, value);
        console.log(result);
        setAnswer(`출력 : ${result}`);
    }

    return (
        <div>
            <h3 className="text-3xl font-bold">{post.title}</h3>
            <p>{post.testinput}</p>
            <p>{post.testoutput}</p>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="c">c</option>
                <option value="cpp">cpp</option>
                <option value="js">javascript</option>
            </select>
            <span className="left-100 fixed text-2xl font-semibold">문제 설명</span>
            <br></br>
            <div className="w-6/12 inline-block">
                <CodeEditor
                    value={code}
                    language={value}
                    placeholder="Please Enter the Code."
                    onChange={(e) => setCode(e.target.value)}
                    padding={15}
                    style={{
                        fontSize: 15,
                        backgroundColor: "#f5f5f5",
                        fontFamily:
                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                    }}
                    className="w-8/12 h-96 rounded"

                />
            </div>
            <div className="w-6/12 inline-block align-top">{post.explain}</div>
            <Button onClick={runCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Run</Button>
            <p>{runCode}</p>
            
            <p>{post.example}</p>
        </div>
    )
}