import React from "react";
import "../styles/ComingSoon.css";

import logo from "../images/logo.svg";
import EmailInput from "./EmailInput";

const ComingSoon = () => {
    return (
        <div className="ComingSoon">
            <div className="coming__body">
                <img src={logo} alt="Base Apparel" />
                <h1>
                    <span>WE'RE</span>
                    <br />
                    COMING
                    <br />
                    SOON
                </h1>
                <p>
                    Hello fellow shoppers! We're currently building our new
                    fashion store. Add your email below to stay up-to-date with
                    announcements and our launch deals.
                </p>
                <EmailInput />
            </div>
            <div className="coming__header"></div>
        </div>
    );
};

export default ComingSoon;
