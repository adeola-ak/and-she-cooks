import { useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";


export default function Home() {
	const [selected, setSelected] = useState("sort: newest");

	const options = [
		"newest",
		"meal type (breakfast)",
		"meal type (lunch)",
		"meal type (dinner)",
		"featured",
	];

	return (
		<div>
			<Header />
			<div className="site-actions">
				<Link href="/add-recipe">Add a Recipe </Link>
				<p>Featured Recipes</p>

				<select
					value={selected}
					onChange={(e) => setSelected(e.target.value)}
				>
					{options.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>
		</div>
	);
}
