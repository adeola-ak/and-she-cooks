import Image from "next/image";
import logo from "../public/logo.svg";

function Header() {
	return (
		<div className="header-wrapper">
			<Image src={logo} width={100} height={75} alt="logo" />

			<div className="header-links-container">
				<ul className="header-links-list">
					<li className="header-list">
						<a href="/">All recipes</a>
					</li>
					<li className="header-list">
						<a href="/">Kitchen</a>
					</li>
					<li className="header-list">
						<a href="/">Shopping Cart</a>
					</li>
					<li className="header-list">
						<a href="/">Log Out</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
