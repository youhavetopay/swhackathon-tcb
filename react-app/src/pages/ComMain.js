import { useDebugValue } from 'react'
import './ComMain.css'


function ComMain() {



    return(
        <div className="body">
            <div className="flex_row">
                <div style={{flexGrow:1}}>
                    <div className="flex_column left_box">
                        <div style={{flexGrow:5}} className="profile">
                            <img id="profile_pic" src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' width='150'></img>
                            <p>userId</p>
                            <p>testValue</p>
                        </div>
                        <div style={{flexGrow:1}} className="letf_box_bottom">
                            <div>Home</div>
                            <div>글 목록</div>
                            <div>글 쓰기</div>
                            <div style={{marginBottom:0}}>Setting</div>
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
                            <p>사진</p>
                        </div>
                    </div>
                </div>
                <div style={{flexGrow:1}}>
                    <div className="flex_column right_box">
                        <span style={{marginTop:20}}>TRENDING</span>
                        <span style={{fontSize:"20px", marginBottom:20}}>일일 기준 최다 공감수</span>
                        <div className="flex_column content_list">
                            <span>test1</span>
                            <span>test2</span>
                            <span>test3</span>
                            <span>test4</span>
                            <span>test5</span>
                            <span>test6</span>
                            <span>test7</span>
                            <span>test8</span>
                            <span>test9</span>
                            <span>test10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComMain;