import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import InnerContainer from "./components/InnerContainer";
import Nav from "./components/Nav";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import Search from "./components/Search";

function App() {
  const [recipeData, setRecipeData] = useState([]);
  const [clickedId, setClickedId] = useState("");
  return (
    <div className="App">
      <Nav />
      <Search
        setClickedId={setClickedId}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
      <Container>
        <InnerContainer>
          <RecipeList setClickedId={setClickedId} recipeData={recipeData} />
        </InnerContainer>
        <InnerContainer>
          <RecipeDetails clickedId={clickedId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
