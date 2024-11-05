import { useEffect, useState } from "react";
import details from "../local/details";
export default function RecipeDetails({ clickedId }) {
  const URL = `https://api.spoonacular.com/recipes/${clickedId}/information`;
  const [reDetails, setReDetails] = useState({});
  useEffect(
    (e) => {
      async function fetchDetails() {
        if (clickedId === "") return;
        // const response = await fetch(
        //   `${URL}?apiKey=${import.meta.env.VITE_API_KEY}`
        // );
        // const recipeDetails = await response.json();
        details && (setReDetails(details), console.log("디테일: ", details));
      }
      fetchDetails();
    },
    [clickedId]
  );
  return (
    <div>
      {reDetails && (
        <div>
          <div>
            <h2>{reDetails.title}</h2>
            <img src={reDetails.image} alt={reDetails.title} />
          </div>
          <div>
            <span>
              <strong>⏰{reDetails.cookingMinutes}분</strong>
            </span>
            &nbsp;
            <span>
              <strong>👨‍👩‍👧‍👦{reDetails.servings}인분</strong>
            </span>
            &nbsp;
            <span>{reDetails.vegetarian ? "🥕채식가" : "🍖일반용"}</span>&nbsp;
            <span>{reDetails.vegan ? "🥬완전채식" : ""}</span>
          </div>
          <div>
            <span>
              가격: ₩{Math.round((reDetails.pricePerServing * 1300) / 100)}/1인
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
