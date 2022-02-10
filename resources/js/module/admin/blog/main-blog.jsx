import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
// import routes from '../../../routes'
import routes from "../../routes";

class MainBlog extends React.Component {

    constructor(props) {
        super(props);
    }

    refreshPage() {
        if (window.location.href == process.env.MIX_APP_URL+'/admin') {
            window.location.reload();
        }
    }

    render() {
        return (
            <div>
                sadsadsa
            </div>
        );
    }
}
export default MainBlog;
