import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
    </div>
  );
}

export default App;
