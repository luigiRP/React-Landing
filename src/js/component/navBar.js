import React from "react";

function NavBar() {
	return (
		<nav className="navbar navbar-dark bg-dark d-flex navbar-expand-lg ">
			<a href="#" className="navbar-brand">
				Start Bootstrap
			</a>
			<div className="collapse navbar-collapse ">
				<ul className="navbar-nav  d-flex ml-auto">
					<li className="nav-item">
						<a href="#" className="nav-link">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							About
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Services
						</a>
					</li>
					<li className="nav-item">
						<a href="#" className="nav-link">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default NavBar;
