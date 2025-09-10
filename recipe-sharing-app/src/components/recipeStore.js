import { create } from "zustand";

const useRecipeStore = create(set => ({
    recipes: [],
    addRecipe: (newRecipe) => set(state => ({recipe: [...state.recipes, newRecipe]})),
    setRecipe: (recipes) => set({recipes})
}));

export default useRecipeStore;