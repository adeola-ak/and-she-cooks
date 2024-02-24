import Image from "next/legacy/image";
import logo from "../public/logo.svg";
import Link from "next/link";

function Header({ user, signOut }) {
	return (
		<div className="header-wrapper">
			<Image
				src={logo}
				width={100}
				height={75}
				alt="and-she-cooks-logo"
			/>

			<div className="header-links-container">
				<ul className="header-links-list">
					<li className="header-list">
						<Link href="/">Cabinet</Link>
					</li>
					<li className="header-list">
						<Link href="/">Shopping Cart</Link>
					</li>
					<li className="header-list">
						{user ? (
							<form action={signOut}>
								<button className="">Logout</button>
							</form>
						) : (
							<Link href="/login" passHref>
								Login
							</Link>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Header;
