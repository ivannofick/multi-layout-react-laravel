import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// import AdminRoutes from "../../admin-routes";
import AdminRoutes from "../../admin-routes";

class SidebarAdmin extends React.Component {

    constructor(props) {
        super(props);
    }

    refreshPage() {
        window.location.reload();
    }

    render() {
        return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse">
            <div className="position-sticky pt-3 bg-dark">
              <ul className="nav flex-column" onClick={this.refreshPage}>
                {AdminRoutes.map(function(obj, i) {
                    return <li className="nav-item active" key={i}>
                        <Link to={obj.path} className="nav-link text-light bg-dark">
                            <span>{obj.name}</span>
                        </Link>
                    </li>
                })}
              </ul>
            </div>
        </nav>
        );
    }
}
export default SidebarAdmin;
