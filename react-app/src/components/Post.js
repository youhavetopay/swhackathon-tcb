import React, { useState, useEffect } from "react"
import PostView from "../pages/PostView";
import './Post.css'

function Post(props) {

    const viewpost = () => {
        return(
            <PostView elem={props.elem} />
        );
    }

    return(
        <main className="post">
            <button className="title" onClick={viewpost}>
                <h3>{props.elem.content_title}</h3>
            </button>
            <section className="likes">
                ♡ {props.elem.content_count}
            </section>
        </main>
    );
}

export default Post;