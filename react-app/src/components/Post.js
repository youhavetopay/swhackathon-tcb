import React, { useState, useEffect } from "react"

function Post(props) {
    // db와 연결하여 idx props에 해당하는 게시글 가져오기 
    const [title, setTitle] = useState(null);
    const [views, setViews] = useState(null);
    const [likes, setLikes] = useState(null);


    return(
        <main className="post-list">
            <div className="title">
                {title}
            </div>
            <section className="views">
                {views}
            </section>
            <section className="likes">
                {likes}
            </section>
        </main>
    );
}

export default Post;