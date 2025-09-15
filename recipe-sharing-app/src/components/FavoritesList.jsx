import { useRecipeStore } from './recipeStore';
import { useMemo } from 'react';

export const FavoritesList = () => {
  const favoritesIds = useRecipeStore(state => state.favorites);
  const recipes = useRecipeStore(state => state.recipes);

  const favorites = useMemo(() => {
    return favoritesIds.map(id =>
      recipes.find(recipe => recipe.id === id)
    );
  }, [favoritesIds, recipes]);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
