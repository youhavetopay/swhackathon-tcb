import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import ComMain from "../pages/ComMain"
import User from "../pages/User"
import PostList from "../pages/PostList"
import WritePost from "../pages/WritePost"
import NoPageFound from "../pages/NoPageFound"
import PostView from "../pages/PostView"

function Community(){
    return (
        <Router>
            <header>
                <Link to="/">
                    <button>Main</button>
                </Link>
                <Link to="/user">
                    <button>User</button>
                </Link>
                <Link to="/posts">
                    <button>Posts</button>
                </Link>
                <Link to="/write">
                    <button>Test</button>
                </Link>
            </header>
            <hr />
            <main>
                <Switch>
                    <Route exact path="/" component={ComMain} />
                    <Route path="/user" component={User} />
                    <Route path="/posts" component={PostList} />
                    <Route path="/write" render={() => <WritePost postnum={null}/>} />
                    <Route component={NoPageFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default Community;