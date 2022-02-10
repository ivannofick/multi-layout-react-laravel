import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import AdminRoutes from "../../admin-routes";

class NavbarAdmin extends React.Component {

    constructor(props) {
        super(props);
    }

    refreshPage() {
        window.location.reload();
    }

    render() {
        return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </header>
        );
    }
}
export default NavbarAdmin;
