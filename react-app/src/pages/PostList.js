import React, {useState} from 'react';
import Post from "../components/Post";

function PostList(){
    const [posts, setPosts] = useState([{
        idx: null,
        title: '',
        category: ''
    }]);
    const listcount = 10;
    let pageindex = 0;

    const renderPosts = (cnt) => {
        // Post 목록 불러오기
        const { posts } = posts;
        const postlist = posts.map(r => {
            return r.idx + r.title;
        });
        
        return postlist;
    }

    return(
        <div>
            {renderPosts(listcount)}
        </div>
    );
}

export default PostList;