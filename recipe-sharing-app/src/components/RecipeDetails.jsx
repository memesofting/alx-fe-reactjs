import useRecipeStore from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );

  if (!recipe) {
    return <div>Recipe not found or still loading...</div>;
  }
  
  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      <button>Edit Recipe Form</button>
      <button>Delete Recipe</button>
    </div>
  );
};

export default RecipeDetails;
