import React from "react";
import { Link } from 'react-router-dom'
import './Login.css'
import { TiSocialGooglePlus } from "react-icons/ti"


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
              <button className="loginIcon"><TiSocialGooglePlus size="30" color="#fff"/>&nbsp;&nbsp;&nbsp; Sign In With Google </button>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Login;
