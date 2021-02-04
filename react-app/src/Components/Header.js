import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Main from "../pages/Main"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Header() {
    return (
        <Router>
            <header className="Header">
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
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </main>
        </Router>
    );
}

export default Header;