import { useEffect, useState } from "react";
export default function RecipeDetails({ clickedId }) {
  const URL = `https://api.spoonacular.com/recipes/${clickedId}/information`;
  const [reDetails, setReDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false);
        console.log(recipeDetails);
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
          <div>
            <h3>조리 단계</h3>
            <ul>
              {reDetails.analyzedInstructions[0].steps.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
