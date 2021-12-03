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
        <div>
            <h1>New Post</h1>
            <form onSubmit={makePost}>
                <label>제목</label>
                <input type="text" id="title" />
                <select id="level" defaultValue="1">
                    <option value="1">LOW</option>
                    <option value="2">MEDIUM</option>
                    <option value="3">HIGH</option>
                </select>
                <label>문제 설명</label>
                <textarea id="explain"></textarea><br />
                <label>예시 코드 (C++언어로 작성해야 합니다.)</label>
                <CodeEditor
                    value={code}
                    language="cpp"
                    placeholder="Please enter example code."
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily:
                            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace"
                    }}
                />
                <label>예시 입력(Enter로 구분)</label>
                <textarea id="testinput"></textarea>
                <label>예시 출력(Enter로 구분)</label>
                <textarea id="testoutput"></textarea><br />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}