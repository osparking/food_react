import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipeData }) {
  return (
    <div>
      {recipeData.map((recipe) => (
        <RecipeItem recipe={recipe} key={recipe.id} />
      ))}
    </div>
  );
}
