import { Button } from "semantic-ui-react";
import { newPost } from "../api/post";
import React from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function New() {
    const [code, setCode] = React.useState("");

    async function makePost(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const explain = form.explain.value;
        const example = code;
        const testinput = form.testinput.value.split("\n");
        const testoutput = form.testoutput.value.split("\n");
        const difficulty = form.level.value;
        const post = await newPost(title, explain, example, testinput, testoutput, difficulty);
        console.log(post);
    };
    return (
        <div className=" mx-10">
            <form onSubmit={makePost}>
                <input type="text" className=" w-[90%] text-2xl p-2 mb-4 bg-[#f5f5f5]" id="title" placeholder="제목" />
                <select id="level" defaultValue="1">
                    <option value="1">LOW</option>
                    <option value="2">MEDIUM</option>
                    <option value="3">HIGH</option>
                </select>
                <br />
                <textarea id="explain" className=" w-full p-2 bg-[#f5f5f5] max-h-96 h-[300px]" placeholder="문제 설명"></textarea><br />
                <CodeEditor
                    value={code}
                    language="cpp"
                    placeholder="예시 코드 (C++언어로 작성해야 합니다.)"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    className="mb-4"
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily:
                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                    }}
                />
                <textarea id="testinput" className=" w-full p-2  bg-[#f5f5f5] mb-4 h-[100px]" placeholder="예시 입력(Enter로 구분)"></textarea>
                <br />
                <textarea id="testoutput" className=" w-full p-2  bg-[#f5f5f5] mb-4 h-[100px]" placeholder="예시 출력(Enter로 구분)"></textarea>
                <br />
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">제출</button>
            </form>
        </div>
    );
}