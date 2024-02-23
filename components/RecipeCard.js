import Image from "next/legacy/image";

const RecipeCard = ({ recipe }) => {
	return (
		<div className="recipe">
			<Image
				src={recipe.image}
				width={100}
				height={75}
				alt={recipe.title}
			/>
		</div>
	);
};

export default RecipeCard;
