import React from "react"
import { Link } from 'react-router-dom'
import './Post.css'

function Post(props) {

    return (
        <main className="post">
            <Link to={{
                pathname : './postview',
                state : {
                    elem : props.elem
                }
            }}>
                <button className="title">
                    <h3>{props.elem.content_title}</h3>
                </button>
            </Link>
            <section className="likes">
                ♡ {props.elem.content_count}
            </section>
        </main>
    );
}

export default Post;