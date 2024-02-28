import Image from "next/legacy/image";

const RecipeCard = ({ recipe }) => {
	return (
		<div className="recipe">
			<Image
				src={recipe.image}
				priority
				width={300}
				height={300}
				alt={recipe.title}
			/>
		</div>
	);
};

export default RecipeCard;
