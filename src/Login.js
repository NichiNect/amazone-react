import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login(props) {
    return (
        <div className="login">
            <Link to="/">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    className="login_logo"
                />
            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form action="" method="post">
                    <h5>E-mail</h5>
                    <input type="text" name="email" id="email" />

                    <h5>Password</h5>
                    <input type="password" name="password" id="pasword" />

                    <button className="login_signInButton">Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZONE CLONE Conditions of
                    Use & Sale. Please see out Privacy Notice, our Cookies
                    Notice and our Interest-Based Ads Notice.
                </p>

                <button className="login_registerButton">
                    Create your Amazone Clone account
                </button>
            </div>
        </div>
    );
}

export default Login;
