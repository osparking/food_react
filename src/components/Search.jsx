import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ recipeData, setRecipeData, setClickedId }) {
  const [query, setQuery] = useState("pizza");
  useEffect(
    (e) => {
      async function fetchRecipe() {
        const response = await fetch(
          `${URL}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const recipies = await response.json();
        console.log(recipies.results);
        setRecipeData(recipies.results);
        if (recipies.results.length > 0) {
          setClickedId(recipies.results[0].id);
        }
      }
      fetchRecipe();
    },
    [query]
  );
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
