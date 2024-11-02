import { useEffect, useState } from "react";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "142f1a88ecd044fbb5f387d790108686";

export default function Search() {
  const [query, setQuery] = useState("pasta");
  useEffect(
    (e) => {
      function fetchRecipe() {
      }
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
