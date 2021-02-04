import { Link, Route, BrowserRouter as Router } from "react-router-dom"
import Login from "../pages/Login"
import Main from "../pages/Main"

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
            </header>
            <hr />
            <main>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
            </main>
        </Router>
    );
}

export default Header;