import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";

export default function Search() {
  const [query, setQuery] = useState("pasta");
  useEffect(
    (e) => {
      async function fetchRecipe() {
        const response = await fetch(
          `${URL}?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`
        );
        const recipies = await response.json();
        console.log(recipies.results);
      }
      fetchRecipe();
    },
    [query]
  );
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
