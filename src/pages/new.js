import { Button } from "semantic-ui-react";
import { newPost } from "../api/post";

export default function New() {
    async function makePost(event) {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const explain = form.explain.value;
        const example = form.example.value;
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
                <label>예시 코드</label>
                <textarea id="example"></textarea><br />
                <label>예시 입력(Enter로 구분)</label>
                <textarea id="testinput"></textarea>
                <label>예시 출력(Enter로 구분)</label>
                <textarea id="testoutput"></textarea><br />
                <button type="submit">제출</button>
            </form>
        </div>
    );
}