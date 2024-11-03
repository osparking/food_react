import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <RecipeList recipeData={recipeData} />
    </div>
  );
}

export default App;
