import React, { useState } from 'react';
import { Redirect } from "react-router-dom"
import "./WritePost.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios';

function WritePost(props) {
    const [postContent, setPostContent] = useState({
        title: '',
        content: '',
        category: '',
        user_id: ''
    })

    const getValue = e => {
        const { name, value } = e.target;
        setPostContent({
            ...postContent,
            [name]: value
        });
    };

    const uuid = props.user_id || 'test';

    const submitPost = () => {

        if (postContent.title === "") {
            alert('제목을 작성해주세요');
            return 0;
        }
        if (postContent.content === "") {
            alert('내용을 작성해주세요');
            return 0;
        }
        if (postContent.category === "") {
            alert('카테고리를 선택해주세요');
            return 0;
        }

        if (props.postnum== null)
            Axios.post('http://localhost:3002/create/createContent', {
                title: postContent.title,
                content: postContent.content,
                category: "테스트카테고리상세",
                user_id: uuid
            }).then(() => {
                alert('게시글이 업로드되었습니다!');
                const { goto } = { goto: { pathname: "/" } };
                <Redirect to={goto} />
            })
        else
            Axios.post('http://localhost:3002/create/updateContent/' + props.postnum, {
                title: postContent.title,
                content: postContent.content,
                category: postContent.category,
                user_id: uuid
            }).then(()=>{
                alert('게시글이 수정되었습니다!');
                const { goto } = { goto: { pathname: "/"} };
                <Redirect to={goto} />
            })
    };

    return (
        <div>
            <div className="post-editor">
                <h2>게시글 작성하기</h2>
                <input className="post-title" type='text' placeholder='제목을 입력해주세요' onChange={getValue} name="title" />
                <select className="post-category" onChange={getValue} name="category">
                    <option value="">선택</option>
                    <option value="Daily">생활</option>
                    <option value="Office">직장</option>
                    <option value="Leisure">여가</option>
                    <option value="Other">기타</option>
                </select>
                <CKEditor
                    editor={ClassicEditor}
                    data=""
                    onReady={editor => {
                        if(props.postnum == null)
                            console.log('새 글을 작성합니다', editor);
                        else{
                            console.log('기존 글을 수정합니다', editor);
                            postContent.title = props.elem.content_title;
                            postContent.content = props.elem.content;
                        }
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setPostContent({
                            ...postContent,
                            content: data
                        })
                    }}
                />
            </div>
            <button className="post-submit" onClick={submitPost}>올리기</button>
        </div>
    );

}

export default WritePost;