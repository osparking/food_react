export default function Ingredient({ ingredient }) {
  return (
    <div>
      <img
        src={
          `https://img.spoonacular.com/ingredients_100x100/` + ingredient.image
        }
        alt={ingredient.image}
      />
      <h3>{ingredient.name}</h3>
      <h3>
        {ingredient.amount} {ingredient.unit}{" "}
      </h3>
    </div>
  );
}
