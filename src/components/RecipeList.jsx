import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipeData, setClickedId }) {
  return (
    <div>
      {recipeData.map((recipe) => (
        <RecipeItem
          setClickedId={setClickedId}
          recipe={recipe}
          key={recipe.id}
        />
      ))}
    </div>
  );
}
