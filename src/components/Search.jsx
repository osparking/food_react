import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search({ recipeData, setRecipeData }) {
  const [query, setQuery] = useState("pasta");
  useEffect(
    (e) => {
      async function fetchRecipe() {
        const response = await fetch(
          `${URL}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const recipies = await response.json();
        console.log(recipies.results);
        setRecipeData(recipies.results);
      }
      // fetchRecipe();
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
