import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NoPageFound from "../pages/NoPageFound"

function Welcome(){
    return (
        <Router>
            <header>
                <Link to="/">
                    <button>Main</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </header>
            <hr />
            <main>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={NoPageFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default Welcome;