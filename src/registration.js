import React from "react";
import axios from "./axios";

export default class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            error: ""
        };
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        axios
            .post("/registration", {
                first: this.state.first,
                last: this.state.last,
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                if (res.data.message == "error") {
                    this.handleError();
                } else {
                    location.replace("/");
                }
            })
            .catch(err => {
                console.log(err);
            });
        e.preventDefault();
    }

    handleError() {
        this.setState({
            error: true
        });
    }

    render() {
        return (
            <div className="registration">
                {this.state.error && (
                    <h2>Ooops, something went wrong. Please try again!</h2>
                )}
                <form>
                    <input
                        type="text"
                        name="first"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name="last"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.handleSubmit} name="submit">
                        Sign up
                    </button>
                </form>
            </div>
        );
    }
}
