import { Link, Route, Redirect, BrowserRouter as Router, Switch } from "react-router-dom"
import React, { useState, useEffect } from "react"
import WritePost from './WritePost';
import Axios from 'axios';
import ReactHTMLParser from 'react-html-parser';
import { BiArrowBack } from "react-icons/bi"
import { FiHeart } from "react-icons/fi" // FaHeart 꽉찬 하트
import "./PostView.css"

function PostView(props) {

    const removePost = async () => {
        if (window.confirm('게시물을 삭제하시겠습니까?\n삭제된 게시물은 복구할 수 없습니다.')) {
            Axios.post('http://localhost:3002/create/deleteContent/' + props.postnum).then(() => {
                alert('게시글이 삭제되었습니다');
                const { goto } = { goto: { pathname: "/" } };
                <Redirect to={goto} />
            })
        }
    }
    const editPost = async () => {
        <Router>
            <Route path="/write" render={() => <WritePost postnum={props.postnum} elem={props.elem} />} />
        </Router>
    }
    // 작성자와 보는사람이 같으면 수정/삭제 버튼 표시
    const showButton = () => {
        <>
            <button onClick={editPost}>수정</button>
            <button onClick={removePost}>삭제</button>
        </>
    }

    return (
        <div>
            <Link to="/posts" className="leftmenu back">
                <button><BiArrowBack />&nbsp; 돌아가기</button>
            </Link>
            {showButton}
            <div className="clear">
              <div className="title">
                  <h3>{props.location.state.elem.content_title}</h3>
              </div>
              <hr></hr>
              <div className="content">
                  {ReactHTMLParser(props.location.state.elem.content_con)}
              </div>
              <div className="like">
                  <button>
                      <FiHeart /> {props.location.state.elem.content_count}
                  </button>
              </div>
              <hr></hr>
              <div className='comment'>
                  <h4> 댓글 </h4>
                  <textarea rows='3' cols='30' placeholder='댓글로 의견을 남겨보세요'
                      maxLength='100' name='write_reply'>
                  </textarea>
                  &nbsp;&nbsp;
                  <input type='button' value='등록' id='reply_submit_button' className='commentbtn'/>
              </div>
            </div>
        </div>
    );
}

export default PostView;
