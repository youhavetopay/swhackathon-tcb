import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Main from "../pages/Main"
import Login from "../pages/Login"
import WritePost from "../pages/WritePost"
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
                <Link to="/write">
                    <button>Test</button>
                </Link>
            </header>
            <hr />
            <main>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/login" component={Login} />
                    <Route path="/write" render={() => <WritePost isnew={isnew}/>} />
                    <Route component={NoPageFound} />
                </Switch>
            </main>
        </Router>
    );
}

export default Welcome;