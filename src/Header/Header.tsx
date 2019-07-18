import React, { Component } from "react";
import mail from "./icons/mail.png";
import copy from "./icons/copy.png";
import github from "./icons/github.png";
import linkedin from "./icons/linkedin.png";
import img from "./crop.jpg";
import "./Header.scss";

export default class Header extends Component {

    componentDidMount() {
        let copyButton = document.querySelector("#copy");
        if (copyButton) {
            copyButton.addEventListener("click", () => {
                let email = document.querySelector("#email");
                let range = document.createRange();
                if (email) {
                    range.selectNode(email);
                    (window as any).getSelection().addRange(range);
                    try {
                        let success = document.execCommand("copy");
                        let msg = success ? "successful" : "unsuccessful";
                        console.log("Copy email command was " + msg);
                    } catch (err) {
                        console.log("Unable to copy");
                    }
                    (window as any).getSelection().removeAllRanges();
                }
            });
        }
    }

    render() {
        return (
            <section className="Header">
                <div className="bb"></div>
                <h1>Benjamin Ellis</h1>
                <div className="E-mail"><h3 id="email">ben@niftlabs.io</h3><a id="mail" href="mailto:ben@niftlabs.io"><img id="mail-icon" alt="Mailto" src={mail} /></a> <a id="copy" href="/#"><img id="copy-icon" alt="Copy E-mail" src={copy} /></a></div>
                <img src={img} alt="The author, Benjamin Ellis"></img>
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/Corvinae"><img alt="Github" src={github} /> @Corvinae</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamintellis/"><img alt="LinkedIn" src={linkedin} />/in/benjamintellis/</a></li>
                </ul>
            </section>
        );
    }
}