import React, { useState, useEffect } from 'react';
import './ComMain.css'
import mainPersonImg from '../images/commain_person.png'
import mainLogImg from '../images/commain_log.png'
import Axios from 'axios';


function ComMain() {

    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3002/contentList/0').then((response) => {
            console.log(response.data.topContent);
            setRanking(response.data.topContent);
        })
    }, [])

    return(
        <div className="body">
            <div className="flex_row">
                <div style={{flexGrow:1}}>
                    <div className="flex_column left_box">
                        <div style={{flexGrow:5}} className="profile flex_column">
                            <img id="main_log" src={mainLogImg} width="300"></img>
                            <img id="profile_pic" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' width='250'></img>
                            <span>userId</span>
                            <span>이름</span>
                            <button id="logout_btn">Logout</button>
                        </div>
                        
                    </div>
                </div>
                <div style={{flexGrow:2}}>
                    <div className="mainBox flex_row">
                        <div className="mainBox_text" style={{flexGrow:1}}>
                        <span style={{fontSize:'60px'}}>불편함</span><span>의</span>
                        <br></br>
                        <span>인지가</span>
                        <br></br>
                        <span>모든변화의</span>
                        <br></br>
                        <span>시작입니다.</span>
                        </div>
                        <div className="mainBox_text" style={{flexGrow:1}}>
                            <img src={mainPersonImg} width='300'></img>
                        </div>
                    </div>
                </div>
                <div style={{flexGrow:1}}>
                    <div className="flex_column right_box">
                        <span style={{marginTop:20}}>TRENDING</span>
                        <span style={{fontSize:"20px", marginBottom:20}}>일일 기준 최다 공감수</span>
                        <div className="flex_column content_list">
                            {ranking.map(elem =>
                                <span key={elem.content_num} >
                                    {elem.content_title}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComMain;