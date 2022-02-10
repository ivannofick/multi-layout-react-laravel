import { first } from 'lodash';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import MainAdmin from './components/admin/main-admin';
import MainUser from './components/user/main-user';

require('./bootstrap');
// require('./components/Example');

class App extends React.Component {
    constructor (props) {
        super(props)
    }

    seeUrl() {
        let first = window.location.href;
        first.indexOf(1);
        first.toLowerCase();
        return first.split("/")[3];
    }

    render() {
        return(
            <div>
                {this.seeUrl() === 'admin' ? <MainAdmin /> : <MainUser />}

            </div>
        )
    }

}
ReactDOM.render(<App />, document.getElementById('root'))
