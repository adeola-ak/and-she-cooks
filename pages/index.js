import { useState } from "react";
import Header from "@/components/Header";

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
				<p>Add a Recipe</p>
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
