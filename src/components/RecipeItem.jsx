export default function RecipeItem({ recipe }) {
  return (
    <div style={{marginTop: '20px'}}>
      <img src={recipe.image} alt={recipe.title} />
      <h1>{recipe.title}</h1>
      <button onClick={null}>조리법</button>
      <br />
    </div>
  );
}
