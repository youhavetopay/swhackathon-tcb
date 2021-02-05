import React from "react";
import { Link } from 'react-router-dom'
import './Login.css'



export class Login extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="content">
            <div className="text_login">
              <h2>SNS 계정 로그인</h2>
            </div> 
            <div className="form">
              <button type="button" className="btn"><img src='https://developers.google.com/identity/images/btn_google_signin_dark_normal_web.png?hl=ko' alt="Google"></img></button><br></br>
              <button type="button" className="btn"><img src='https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png' alt='Kakao'></img></button><br></br>
              <button type="button" className="btn"><img src='https://scontent-gmp1-1.xx.fbcdn.net/v/t39.2365-6/17639236_1785253958471956_282550797298827264_n.png?_nc_cat=105&ccb=2&_nc_sid=ad8a9d&_nc_ohc=tSQ3O2aaF9cAX8pZv_r&_nc_ht=scontent-gmp1-1.xx&oh=a321163205d284fc16e99a4d520116d4&oe=6042D996' alt='Facebook'></img></button><br></br>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Login;