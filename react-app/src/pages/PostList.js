import React, {useState} from 'react';
import Post from "../components/Post";

function PostList(){
    const [posts, setPosts] = useState([]);
    const listcount = 10;
    let pageindex = 0;

    const renderPosts = () => {
        let i = 0;
        for(i = 10 * pageindex; i < 10 * pageindex + listcount; i++){
            <Post index={i}></Post>
        }
    }

    return(
        <div>
            {renderPosts}
        </div>
    );
}

export default PostList;