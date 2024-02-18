import Image from "next/image";
import logo from "../public/logo.svg";

import Link from "next/link";

function Header() {
	return (
		<div className="header-wrapper">
			<Image src={logo} width={100} height={75} alt="logo" />

			<div className="header-links-container">
				<ul className="header-links-list">
					<li className="header-list">
						<Link href="/">All recipes</Link>
					</li>
					<li className="header-list">
						<Link href="/">Kitchen</Link>
					</li>
					<li className="header-list">
						<Link href="/">Shopping Cart</Link>
					</li>
					<li className="header-list">
						<Link href="/">Log Out</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
