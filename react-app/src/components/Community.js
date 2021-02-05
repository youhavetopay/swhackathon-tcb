import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import ComMain from "../pages/ComMain"
import User from "../pages/User"
import PostList from "../pages/PostList"
import WritePost from "../pages/WritePost"
import NoPageFound from "../pages/NoPageFound"
import PostView from "../pages/PostView"
import { FaHome } from "react-icons/fa"
import { FaListUl } from "react-icons/fa"
import { FaPencilAlt } from "react-icons/fa"
import { GrUserSettings } from "react-icons/gr"
import "./default.css"

function Community(){
    return (
        <Router>
            <header>
                <Link to="/" className="leftmenu">
                    <button><FaHome />&nbsp; 불편수거함</button>
                </Link>
                <Link to="/posts" className="leftmenu">
                    <button><FaListUl />&nbsp; 글 목록</button>
                </Link>
                <Link to="/user" className="rightmenu">
                    <button><GrUserSettings />&nbsp; Setting</button>
                </Link>
                <Link to="/write" className="rightmenu">
                    <button><FaPencilAlt />&nbsp; 글 쓰기</button>
                </Link>
            </header>
            <hr />
            <main>
                <Switch>
                    <Route exact path="/" component={ComMain} />
                    <Route path="/user" component={User} />
                    <Route path="/posts" component={PostList} />
                    <Route path="/write" render={() => <WritePost postnum={null}/>} />
                    <Route path="/postview" component={PostView} />
                    <Route component={NoPageFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default Community;
