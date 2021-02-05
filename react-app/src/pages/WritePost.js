import React, {useState} from 'react';
import { Redirect } from "react-router-dom"
import "./WritePost.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';

function WritePost() {
    const [postContent, setPostContent] = useState({
        title: '',
        content: ''
    })

    const getValue = e => {
            const {name, value} = e.target;
        setPostContent({
            ...postContent,
            [name]: value
        });
    };

    const submitPost = () =>{
        if(postContent.title===""){
            alert('제목을 작성해주세요');
            return 0;
        }
        if(postContent.content===""){
            alert('내용을 작성해주세요');
            return 0;
        }

        Axios.post('http://localhost:3306/createContent', {
            title: postContent.title,
            content: postContent.content
        }).then(()=>{
            alert('게시글이 업로드되었습니다!');
            const { goto } = { goto: { pathname: "/" } };
            <Redirect to={goto} />
        })
    };

    return (
        <div>
            <div className="post-editor">
                <h2>게시글 작성하기</h2>
                <input className="post-title" type='text' placeholder='제목을 입력해주세요' onChange={getValue} name="title" />
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setPostContent({
                            ...postContent,
                            content: data
                        })
                    }}
                    onBlur={(event, editor) => {
                        console.log(postContent);
                    }}
                />
            </div>
            <button className="post-submit" onClick={submitPost}>올리기</button>
        </div>
    );

}

export default WritePost;