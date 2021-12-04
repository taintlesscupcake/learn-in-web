import { useRouter } from "next/dist/client/router"
import { createComment, getPostbyId } from "../../api/post"
import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import { run } from "../../api/runner";
import { useSession } from "next-auth/client";
import SyntaxHighlighter from 'react-syntax-highlighter';

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
            console.log(res);
            setPost(res)
        })
    }, [router.isReady]);

    const [value, setValue] = useState("c");

    const [code, setCode] = useState("");

    const [answer, setAnswer] = useState("Answer Test");

    const [comment, setComment] = useState("");

    const addComment = async () => {
        console.log("comment is " + comment);
        const { id } = router.query
        await createComment(id, comment)
    }

    const displayComment = () => {
        console.log(post.comments);
        if (post.comments != undefined) {
            return post.comments.map(comment => (
                <div className="flex w-full border-carbon border-4 rounded-xl my-2">
                    <div className="w-full justify-between">
                        <div className=" mx-2">
                            <p className="text-black w-[90%]">{comment.content}</p>
                            <span className="text-black float-right">{`작성자 : ${comment.author.name}`}</span>
                        </div>
                    </div>
                </div>
            ));
        }
        return <div></div>
    }


    const runCode = async function () {
        if (useSession.accessToken == null) {
            alert("You need to login first!")
            router.push("/login")
            return;
        }
        var result = await run(code, value);
        console.log(result);
        setAnswer(`출력 : ${result}`);
    }

    return (
        <div className="ml-10 mr-10">
            <h3 className="text-3xl font-bold">{post.title}</h3>
            <p>{post.testinput}</p>
            <p>{post.testoutput}</p>
            <select value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="c">c</option>
                <option value="cpp">cpp</option>
                <option value="js">javascript</option>
                <option value="ts">typescript</option>
                <option value="go">golang</option>
                <option value="py">python</option>
            </select>
            <span className="absolute left-1/2 text-2xl font-semibold">문제 설명</span>
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
                    className="w-8/12 min-h-[24rem] rounded"

                />
            </div>
            <div className="w-6/12 inline-block align-top">{post.explain}</div>
            <Button onClick={runCode} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Run</Button>
            <div className="">{answer}</div>
            <details>
                <summary>예시 코드 보기</summary>
                <SyntaxHighlighter language="cpp">
                    {post.example || "Loading Example..."}
                </SyntaxHighlighter>
            </details>
            <div>
                <textarea className="w-full h-24" placeholder="Write your comment..." value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addComment}>댓글 쓰기</button>
                {displayComment()}
            </div>
        </div>
    )
}