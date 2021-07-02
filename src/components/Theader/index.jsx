import { Component } from 'react';

class Theader extends Component {

    render() {
        return (
            <thead>
                <tr>
                    {[...this.props.columns, 'operator'].map((col, index) => (
                        <th key={index}>{col}</th>
                    ))}
                </tr>
            </thead>
        )
    }

}

export default Theader;