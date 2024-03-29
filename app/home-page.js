"use client";

import { useState } from "react";
import Header from "@/components/Header";
import RecipeCard from "@/components/RecipeCard";
import Image from "next/legacy/image";
import addIcon from "@/public/icons/plus-icon.svg";
import Link from "next/link";

export default function HomePage({ user, signOut, recipes }) {
	const [selected, setSelected] = useState("sort: newest");
	const [addButtonClicked, setAddButtonClicked] = useState(false);

	const options = [
		"newest",
		"meal type (breakfast)",
		"meal type (lunch)",
		"meal type (dinner)",
		"featured",
	];

	return (
		<div>
			<Header user={user} signOut={signOut} />
			<div className="site-actions">
				<Link href="/add-recipe">
					<Image
						src={addIcon}
						alt="add recipe"
						onClick={() => setAddButtonClicked(!addButtonClicked)}
					/>
				</Link>

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

			<div className="recipe-container">
				{recipes.map((recipe, index) => (
					<RecipeCard key={index} recipe={recipe} />
				))}
			</div>
		</div>
	);
}
