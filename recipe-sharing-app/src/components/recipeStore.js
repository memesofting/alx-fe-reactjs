import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [],
  searchTerm: "",
  filteredRecipes: [],
  recommendations: [],
  addToFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id],
    })),
  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),
  addToRecommendations: (id) =>
    set((state) => ({
      recommendations: state.recommendations.includes(id)
        ? state.recommendations
        : [...state.recommendations, id],
    })),
  removeFromRecommendations: (id) =>
    set((state) => ({
      recommendations: state.recommendations.filter((recId) => recId !== id),
    })),
  addRecipe: (newRecipe) =>
    set((state) => { 
      const recipeWithId = { ...newRecipe, id: Date.now().toString() }
      return { recipes: [...state.recipes, recipeWithId] }
    }),
  setRecipes: (recipes) => set({ recipes }),
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
      
      setSearchTerm: (term) => set({ searchTerm: term }),
      
      filteredRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      }))
    })),
}));

