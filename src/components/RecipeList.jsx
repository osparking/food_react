export default function RecipeList({ recipeData }) {
  return (
    <div>
      {recipeData.map((recipe) => (
        <h1 key={recipe.title}>{recipe.title}</h1>
      ))}
    </div>
  );
}
