import { useEffect } from "react";
export default function RecipeDetails({ clickedId }) {
  const URL = `https://api.spoonacular.com/recipes/${clickedId}/information`;
  useEffect(
    (e) => {
      async function fetchDetails() {
        const response = await fetch(
          `${URL}?apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const recipeDetails = await response.json();
        console.log(recipeDetails);
      }
      fetchDetails();
    },
    [clickedId]
  );
  return <div>상세 조리법: {clickedId}</div>;
}
