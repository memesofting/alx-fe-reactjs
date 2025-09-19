import { RecipeList } from "./components/RecipeList";
import { AddRecipeForm } from "./components/AddRecipeForm";
import { RecipeDetails } from "./components/RecipeDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecommendationsList from "./components/RecommendationsList";
import FavoritesList from "./components/FavoritesList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FavoritesList />
              <RecommendationsList />
              <AddRecipeForm />
              <RecipeList />
            </>
          }
        />
        <Route path="/recipedetails" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
