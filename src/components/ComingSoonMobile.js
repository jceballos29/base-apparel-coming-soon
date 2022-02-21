import React from "react";
import "../styles/ComingSoonMobile.css";

import logo from "../images/logo.svg";
import EmailInput from "./EmailInput";

const ComingSoonMobile = () => {
    return (
        <div className="ComingSoonMobile">
            <div className="coming__mobile__logo">
                <img src={logo} alt="Base Apparel" />
            </div>
            <div className="coming__mobile__header"></div>
            <div className="coming__mobile__body">
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
        </div>
    );
};

export default ComingSoonMobile;
