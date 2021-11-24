import "@uiw/react-textarea-code-editor/dist.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import { run } from "../api/runner/runner";
import { useRouter } from "next/dist/client/router";

const CodeEditor = dynamic(
    () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
    { ssr: false }
);

export default function Run() {
    const router = useRouter();

    const [value, setValue] = useState("c");

    const [code, setCode] = useState("");

    const [answer, setAnswer] = useState("");

    const runCode = async function () {
        var result = await run(code, value);
        console.log(result);
        setAnswer(result);
    }

    return (<div>
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
        <div>{answer}</div>
    </div>);
}