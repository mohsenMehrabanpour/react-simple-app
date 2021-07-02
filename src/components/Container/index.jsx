import { Component, Fragment } from "react";
import './style.css';
import List from './../List';

class Container extends Component {

    render() {
        return (
            <Fragment>
                <h1 className="title">List</h1>
                <List />
            </Fragment>
        )
    }
}

export default Container;