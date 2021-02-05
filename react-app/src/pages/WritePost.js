import React, {useState} from 'react';
import "./WritePost.css";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

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

    return (
        <div>
            <div className="post-editor">
                <h2>게시글 작성하기</h2>
                <input className="post-title" type='text' placeholder='제목을 입력해주세요' onChange={getValue} name="title" />
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>이곳에 입력하세요</p>"
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
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
            <button className="post-submit">올리기</button>
        </div>
    );

}

export default WritePost;