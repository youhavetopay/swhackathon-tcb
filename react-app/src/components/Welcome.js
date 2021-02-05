import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Main from "../pages/Main"
import Login from "../pages/Login"
import NoPageFound from "../pages/NoPageFound"
import { FaHome } from "react-icons/fa"
import { RiLoginCircleLine } from "react-icons/ri"

function Welcome(){

    return (
        <Router>
            <header>
                <Link to="/" className="leftmenu">
                    <button><FaHome />&nbsp; Home</button>
                </Link>
                <Link to="/login" className="rightmenu">
                    <button><RiLoginCircleLine />&nbsp; Login</button>
                </Link>
            </header>
            <hr />
            <main>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/login" component={Login} />
                    <Route component={NoPageFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default Welcome;
