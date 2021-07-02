import { Component } from "react";
import './style.css';

class Tbody extends Component {
    render() {
        return (
            <tbody>
                {this.props.data.map((item, index) => (
                    <tr key={index}>
                        {Object.keys(item).map((key, index) => ( //dynamic showing data
                            <td key={index}>{item[key]}</td>
                        ))}
                        <td>
                            <button
                                onClick={() => this.props.delete(item.id)}
                                className="delete"
                            >
                                &#x26D4;
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        )
    }
}

export default Tbody;