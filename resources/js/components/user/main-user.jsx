import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import NavbarUser from "./navbar-user";
import routes from "../../routes";

class MainUser extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <NavbarUser />
                    <Routes>
                        {routes.map(({ path, Component, name, id }) => {
                            return <Route key={id} exact path={path} element={Component}></Route>
                        })}
                    </Routes>
            </Router>
        );
    }
}
export default MainUser;
