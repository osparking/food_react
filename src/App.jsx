import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  return (
    <div className="App">
      <Nav />
      <Search recipeData={recipeData} setRecipeData={setRecipeData} />
      <Container>
        <InnerContainer>
          <RecipeList recipeData={recipeData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails/>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
