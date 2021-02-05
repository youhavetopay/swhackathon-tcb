import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Main from "../pages/Main"
import Login from "../pages/Login"
import NoPageFound from "../pages/NoPageFound"

function Welcome(){

    const isnew = true;

    return (
        <Router>
            <header>
                <Link to="/">
                    <button>Main</button>
                </Link>
                <Link to="/login">
                    <button>Login</button>
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