import "./default.css"
import Community from "./Community"
import Welcome from "./Welcome"

function Header(props) {
    if (props.isauthed)
        return (
            <div className="default">
                <Community />
            </div>
        );
    else
        return (
            <div className="default">
                <Welcome />
            </div>
        );
}

export default Header;