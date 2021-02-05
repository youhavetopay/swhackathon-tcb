import React from "react";
import { Link } from 'react-router-dom'
//import loginImg from "../../login.svg";



export class Login extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">SNS Login</div>
          <div className="content">
            {/* <div className="image">
              <img src={loginImg} />
            </div> */}
            <div className="form">
              <button type="button" className="btn"><img src='https://developers.kakao.com/tool/resource/static/img/button/login/full/ko/kakao_login_medium_narrow.png' alt='Kakao'></img></button><br></br>
              <button type="button" className="btn">페이스북 로그인</button><br></br>
              <button type="button" className="btn">카카오톡 로그인</button><br></br>
            </div>
          </div>
          <div className="footer">
            <Link to="./User"> 
              <button> 회원가입 </button>
            </Link>
          </div>
        </div>
      );
    }
  }

  export default Login;