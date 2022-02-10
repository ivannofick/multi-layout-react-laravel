import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import routes from "../../routes";

class NavbarUser extends React.Component {

    constructor(props) {
        super(props);
    }

    refreshPage() {
        window.location.reload();
    }

    render() {
        console.log();
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={process.env.MIX_APP_URL+"/storage/assets/logo.png"} width="53"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto" onClick={this.refreshPage}>
                           {routes.map(function(obj, i) {
                                return <li className="nav-item active" key={i}>
                                    <Link to={obj.path} className="nav-link">
                                        <span>{obj.name}</span>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavbarUser;
