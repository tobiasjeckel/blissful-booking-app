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
                <div className="reglog">
                    <div className="splash">
                        <img src="/assets/market_splash.jpg" />
                        <div className="splashcontent">
                            <div className="splashheader">
                                <h1>
                                    Book your stand at Berlin&apos;s hippest
                                    Flea Markets
                                </h1>
                            </div>
                        </div>
                    </div>
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
        return (
            <Link to="/login">
                <p className="already">Already a member? Please log in</p>
            </Link>
        );
    }
    RegistrationLink() {
        return (
            <Link to="..">
                <p className="already">
                    Don&apos;t have an account? Please register
                </p>
            </Link>
        );
    }
}
