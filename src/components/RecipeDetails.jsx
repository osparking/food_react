import { useEffect, useState } from "react";
export default function RecipeDetails({ clickedId }) {
  const URL = `https://api.spoonacular.com/recipes/${clickedId}/information`;
  const [reDetails, setReDetails] = useState({});
  useEffect(
    (e) => {
      async function fetchDetails() {
        if (clickedId === "") return;
        const response = await fetch(
          `${URL}?apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const recipeDetails = await response.json();
        recipeDetails &&
          (setReDetails(recipeDetails), console.log("디테일: ", recipeDetails));
        console.log(recipeDetails);
      }
      fetchDetails();
    },
    [clickedId]
  );
  return (
    <div>
      {reDetails.title && (
        <div>
          {reDetails.title}
          <img src={reDetails.image} alt={reDetails.title} />
        </div>
      )}
      <div>상세 조리법: {clickedId}</div>
    </div>
  );
}
