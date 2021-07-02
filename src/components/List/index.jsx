import { Component, Fragment } from "react";
import './style.css';
import Theader from "../Theader";
import Tbody from '../Tbody';
import Search from "../Search";
import Add from "../Add";
import { getUsers, addUser, deleteUser } from "../../service";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tableData: [],
            filteredData: [],
            columns: []
        }
    }

    componentDidMount() {
        getUsers()
            .then(res => this.setState({ tableData: res.data, filteredData: res.data }))
            .catch(err => console.log(err))
    }

    static getDerivedStateFromProps(props, state) {
        // dynamic fetch columns from data
        const rowData = state.tableData[0] || null;
        if (rowData) return { columns: Object.keys(rowData) }
        return {};
    }

    filter = phrase => {
        this.setState(state => ({
            filteredData: state.tableData.filter(item => (
                item['first_name'].toLowerCase().includes(phrase.toLowerCase())
            ))
        }))
    }

    add = (email, first_name, last_name, avatar) => {
        const newData = { email, first_name, last_name, avatar };
        addUser(newData).then(res => {
            this.setState(state => ({
                tableData: state.tableData.concat([{ id: res.id, ...newData }])
            }), () => {
                this.setState({ filteredData: this.state.tableData })
            })
        })
            .catch(err => console.log(err));
    }

    delete = id => {
        deleteUser(id)
            .then(res => {
                res.status === 204 && this.setState(state => ({
                    tableData: state.tableData.filter(item => item.id !== id)
                }), () => { //callback of first setState
                    this.setState({ filteredData: this.state.tableData })
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Fragment>
                <Search filter={this.filter} />
                <Add add={this.add} />
                <table>
                    <Theader columns={this.state.columns} />
                    <Tbody data={this.state.filteredData} delete={this.delete} />
                </table>
            </Fragment>
        )
    }

}

export default List;