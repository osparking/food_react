import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      {recipeData.map((reccipe) => (
        <h1>{reccipe.title}</h1>
      ))}
    </div>
  );
}

export default App;
