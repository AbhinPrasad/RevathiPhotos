import React from "react";
import "./Navbar.css";

import { NavLink,Link } from "react-router-dom";

const links = [
	{ to: "/", text: "Home" },
	{ to: "/about", text: "About" },
	{ to: "/gallery", text: "Gallery" },
	{ to: "/contact", text: "Contact" },
	{ to: "/auth", text: "Login" }
];

function Navbar() {
	return (
		<div className="nav_container">
			<div className="left_nav-section">
				<h2>
					Revathi <br /> Photos
				</h2>
			</div>
			<div className="right_nav-section">
				<ul>
					{links.map((link) => {
						console.log(link);
						return (
							<li key={link.to}>
								<NavLink activeClassName="active" className="nav-link" to={link.to}>{link.text}</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default Navbar;
