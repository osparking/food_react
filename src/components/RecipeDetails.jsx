import { useEffect, useState } from "react";
import styles from "./recipeDetails.module.css";
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
        <div className={styles.recipeCard}>
          <div>
            <h1 className={styles.recipeTitle}>{reDetails.title}</h1>
            <img
              className={styles.recipeImage}
              src={reDetails.image}
              alt={reDetails.title}
            />
          </div>
          <div className={styles.recipeProps}>
            <span>
              <strong>⏰{reDetails.cookingMinutes}분</strong>
            </span>
            &nbsp;
            <span>
              <strong>👨‍👩‍👧‍👦{reDetails.servings}인분</strong>
            </span>
            &nbsp;
            <span>
              <strong>{reDetails.vegetarian ? "🥕채식가" : "🍖일반용"}</strong>
            </span>
            &nbsp;
            <span>
              <strong>{reDetails.vegan ? "🥬완전채식" : ""}</strong>
            </span>
          </div>
          <div>
            <span>
              <strong>
                가격: ₩{Math.round((reDetails.pricePerServing * 1300) / 100)}
                /1인
              </strong>
            </span>
          </div>
          <h2>음식 재료</h2>
          <div>
            {isLoading ? (
              <p>⌛자료 적재 중...</p>
            ) : (
              reDetails.extendedIngredients.map((ingredient) => (
                <div key={ingredient.id}>
                  <img src={ingredient.image} alt={ingredient.image} />
                  <h3>{ingredient.name}</h3>
                  <h3>
                    {ingredient.amount} {ingredient.unit}{" "}
                  </h3>
                </div>
              ))
            )}
          </div>
          <h2>조리 단계</h2>
          <div className={styles.cookSteps}>
            <ol>
              {isLoading ? (
                <p>⌛자료 적재 중...</p>
              ) : (
                reDetails.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}
