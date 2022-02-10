import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavbarAdmin from "./navbar-admin";
import routes from "../../routes";
import SidebarAdmin from "./sidebar-admin";
import AdminRoutes from "../../admin-routes";

class MainAdmin extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <NavbarAdmin />
                <div className="container-fluid">
                    <div className="row">
                        <SidebarAdmin />
                        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-2">
                            <Routes>
                                {AdminRoutes.map(({ path, Component, name, id }) => {
                                    return <Route key={id} exact path={path} element={Component}></Route>
                                })}
                            </Routes>
                        </main>
                    </div>
                </div>
            </Router>
        );
    }
}
export default MainAdmin;
