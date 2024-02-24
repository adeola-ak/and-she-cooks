import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";

const AddOptionDropdown = () => {
	const dropdownRef = useRef(null);
	const [isOpen, setIsOpen] = useState(true);

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className={`dropdown ${isOpen ? "open" : ""}`} ref={dropdownRef}>
			{isOpen && (
				<div className="dropdown-content">
					<p>
						<Link href="/recipe/add">Add a recipe</Link>
					</p>
					<p>
						<Link href="/cabinet/add">Add to cabinet</Link>
					</p>
					<p>
						<Link href="/cart/add">Add to shopping list</Link>
					</p>
				</div>
			)}
		</div>
	);
};

export default AddOptionDropdown;
