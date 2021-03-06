import "./footer.css";
import { useState } from "react";
import React from "react";

export default function Footer() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <footer className="footer _container">
            <div className="footer-text">
                Indacoin Limited, Suite 4b, 43 Berkeley Square, Mayfair, London, Westminster, United Kingdom, W1J 5FJ Company Number 08924450
            </div>
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
                            <a href="">EN</a>
                            <img
                                src="https://cdn.builder.io/api/v1/image/assets%2F8a3e1f23265e419f93be1060e79b08d5%2Fd198ca6065c04dc5957c642a27a69417?width=15"
                                alt=""
                                width="9px"
                                height="9px"
                                text-decoration= "none"
                                />
                        </div>
                    </li>
                    {/* <li>
                        <button type="submit" className="header-btn">Sign In</button>
                    </li> */}
                </ul>
            </div>
        </footer>
    );
}