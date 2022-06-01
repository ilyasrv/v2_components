import "./navbar.css";
import { useState } from "react";
import React from "react";

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <div className="_container">
            <nav className="navigation">
                <a href="/" className="logo">
                    <img src="https://cdn.builder.io/api/v1/image/assets%2F8a3e1f23265e419f93be1060e79b08d5%2F6f1a935d8c0143848a2a9bbe813263ad?width=150" />
                </a>
                <button
                    className="hamburger"
                    onClick={() => {
                        setIsNavExpanded(!isNavExpanded)
                    }}
                >
                    {/* hamburger svg code... */}
                </button>
                <div
                    className={
                        isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                    }
                >
                    <ul>
                        <li>
                            <a href="/Buycrypto">Buy crypto</a>
                        </li>
                        <li>
                            <a href="/Business">Business</a>
                        </li>
                        <li>
                            <a href="/Trackorder">Track order</a>
                        </li>
                        <li>
                            <a href="/faq">FAQ</a>
                        </li>
                        <li>
                            <div className="lang">
                                <span>EN</span>
                                <img
                                    src="https://cdn.builder.io/api/v1/image/assets%2F8a3e1f23265e419f93be1060e79b08d5%2Fd198ca6065c04dc5957c642a27a69417?width=15"
                                    alt="language"
                                    width="9px"
                                    height="9px"
                                />
                            </div>
                        </li>
                        <li>
                            <button type="submit" className="header-btn">Sign In</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}