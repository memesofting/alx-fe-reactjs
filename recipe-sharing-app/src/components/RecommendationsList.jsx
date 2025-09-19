import { useMemo } from 'react';
import { useRecipeStore } from './recipeStore';
import { shallow } from 'zustand/shallow';

const RecommendationsList = () => {
  const recommendationsIds = useRecipeStore(state => state.recommendations, shallow);
  const recipes = useRecipeStore(state => state.recipes, shallow);

  const recommendations = useMemo(() => {
    return recommendationsIds.map(id =>
      recipes.find(recipe => recipe.id === id)
    );
  }, [recommendationsIds, recipes]);

  return (
    <div>
      <h2>My Recommendations</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecommendationsList;