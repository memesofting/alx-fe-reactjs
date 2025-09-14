import { useState, useEffect } from "react";
import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipeId, onDone }) => {
  const { recipes, update } = useRecipeStore();
  const recipe = recipes.find((r) => r.id === recipeId);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();

    update({ id: recipeId, title, description });

    if (onDone) onDone(); // optional: close form or return
  };

  if (!recipe) {
    return <div>Recipe not found.</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Save Changes</button>
      {onDone && <button type="button" onClick={onDone}>Cancel</button>}
    </form>
  );
};

export default EditRecipeForm;
