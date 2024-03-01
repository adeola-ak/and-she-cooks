"use client";

import React, { useState } from "react";

const AddRecipe = () => {
	const [recipeURL, setRecipeURL] = useState("");

	const handleChange = (event) => {
		setRecipeURL(event.target.value);
	};

	async function submitRecipeURL(event) {
		event.preventDefault();
		try {
			const response = await fetch(
				"http://localhost:3000/add-recipe/api",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ url: recipeURL }),
				}
			);

			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			console.log(recipeURL, "hello");

			const data = await response.text();
			// response.json() if API returns JSON
			return data;
		} catch (error) {
			console.error(
				"There was a problem with the fetch operation: ",
				error
			);
		}
		setRecipeURL("");
	}

	return (
		<div className="recipe-container">
			<div className="recipe-submit">
				<input
					className="recipe-input"
					type="text"
					value={recipeURL}
					onChange={handleChange}
					placeholder="Submit Recipe URL"
				/>
				<button onClick={submitRecipeURL} className="submit-button">
					Submit
				</button>
			</div>
		</div>
	);
};

export default AddRecipe;
