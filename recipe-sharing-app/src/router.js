import { createBrowserRouter } from "react-router";
import App from "./App.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: "/recipedetails",
    Component: RecipeDetails,
  }
]);

export default router;