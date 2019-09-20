import React from "react";
import Registration from "./registration";
import Login from "./login";
import { HashRouter, Route, Link } from "react-router-dom";

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <div>
                    <h1>Welcome to Blissfull Booking Tool!</h1>
                    <div>
                        <Route exact path="/" component={Registration} />
                        <Route path="/login" component={Login} />
                        <Route exact path="/" component={this.LoginLink} />
                        <Route
                            exact
                            path="/login"
                            component={this.RegistrationLink}
                        />
                    </div>
                </div>
            </HashRouter>
        );
    }
    LoginLink() {
        return <Link to="/login">Already a member? Please log in</Link>;
    }
    RegistrationLink() {
        return <Link to="..">Don&apos;t have an account? Please register</Link>;
    }
}
