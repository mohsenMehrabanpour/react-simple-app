import { Component, Fragment, createRef } from "react";
import './style.css'

class Add extends Component {

    constructor(props) {
        super(props);
        this.addSection = createRef();
        this.errorBox = createRef();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            avatarURL: ''
        }
    }

    changeHandler = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    toggleSection = () => {
        if (this.addSection.current.style.display === "block") {
            this.addSection.current.style.display = "none";
        } else {
            this.addSection.current.style.display = "block";
        }
    }

    submit = e => {
        e.preventDefault();
        const { firstName, lastName, email, avatarURL } = this.state;
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !avatarURL.trim()) {
            this.errorBox.current.innerHTML = '<p> all fields are requierd <p>';
            return;
        } else {
            this.errorBox.current.innerHTML = '';
        }
        this.props.add(email.trim(), firstName.trim(), lastName.trim(), avatarURL.trim());
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            avatarURL: ''
        })
    }

    render() {
        const { firstName, lastName, email, avatarURL } = this.state;
        return (
            <Fragment>
                <button
                    className="add-btn"
                    onClick={this.toggleSection}>
                    ADD
                </button>
                <div className="add-section" ref={this.addSection}>
                    <div className="error-box" ref={this.errorBox}></div>
                    <form onSubmit={this.submit}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="first name"
                            onChange={this.changeHandler}
                            value={firstName}
                        />
                        <input
                            type="text"
                            name="lastName"
                            placeholder="last name"
                            onChange={this.changeHandler}
                            value={lastName}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            onChange={this.changeHandler}
                            value={email}
                        />
                        <input
                            type="text"
                            name="avatarURL"
                            placeholder="avatar URL"
                            onChange={this.changeHandler}
                            value={avatarURL}
                        />
                        <input type="submit" value="send" />
                    </form>
                </div>
            </Fragment>
        )
    }
}

export default Add;