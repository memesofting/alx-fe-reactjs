import useRecipeStore from "./recipeStore";

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  if (!recipe) {
    return <div>Recipe not found or still loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Render EditRecipeForm and DeleteRecipeButton here */}
      {/* <button>Edit Recipe Form</button>
      <button>Delete Recipe</button> */}
      {editing ? (
        <EditRecipeForm
          recipeId={recipeId}
          onDone={() => setEditing(false)}
        />
      ) : (
        <>
          <button onClick={() => setEditing(true)}>Edit Recipe</button>
          <button onClick={() => setEditing(true)}>Edit Recipe</button>
          <button
            onClick={() => {
              const confirmDelete = window.confirm(
                "Are you sure you want to delete this recipe?"
              );
              if (confirmDelete) {
                deleteRecipe(recipeId);
              }
            }}
          >
            Delete Recipe
          </button>
        </>
      )}
    </div>
  );
};

export default RecipeDetails;
