import React, { useState, useEffect } from 'react';
import Post from "../components/Post";
import Axios from 'axios';

function PostList() {
    const [posts, setPosts] = useState([]);
    const [pageindex, setPageIndex] = useState(0);

    useEffect(() => {
        Axios.get('http://localhost:3002/contentList/' + pageindex * 10).then((response) => {
            setPosts(response.data.contentList);
        })
    }, [])

    const movePageIndex = (i) => {
        if (pageindex > 0)
            setPageIndex(pageindex + i)
    }

    return (
        <div>
            <h1>게시글 목록</h1>
            <div className='post-list'>
                {posts.map(elem =>
                    <div key={elem.content_num} style={{ border: '1px solid #333' }}>
                        <Post elem={elem}/>
                    </div>
                )}
            </div>
            <div>
                <button onClick={movePageIndex(-1)}>◁</button>
                <button onClick={movePageIndex(1)}>▷</button>
            </div>
        </div>
    );
}

export default PostList;