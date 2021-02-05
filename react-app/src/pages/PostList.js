import React, {useState, useEffect} from 'react';
import Post from "../components/Post";
import Axios from 'axios';

function PostList(){
    const [posts, setPosts] = useState([]);
    const [pageindex, setPageIndex] = useState(0);

    useEffect(()=>{
        Axios.get('http://localhost:3002/contentList/' + pageindex * 10).then((response)=>{
            console.log(response);
        })
    },[posts])

    const movePageIndex = (i) =>{
        if(pageindex > 0)
            setPageIndex(pageindex + i)
    }

    return(
        <div>
            <button onClick={movePageIndex(-1)}>◁</button>
            <button onClick={movePageIndex(1)}>▷</button>
        </div>
    );
}

export default PostList;