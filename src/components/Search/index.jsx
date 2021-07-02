import { Component, createRef } from "react";
import './style.css';

class Search extends Component {

    constructor(props) {
        super(props);
        this.searchBar = createRef();
        this.state = {
            search: ""
        }
    }

    changeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.props.filter(value);
    }

    componentDidMount() {
        this.searchBar.current.focus();
    }

    render() {
        return (
            <input
                type="text"
                id="searchBar"
                name="search"
                placeholder="Search ..."
                ref={this.searchBar}
                onChange={this.changeHandler}
                value={this.state.search}
            />
        )
    }
}

export default Search;