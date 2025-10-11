import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipesData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="p-6 text-center text-gray-700">Recipe not found.</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Ingredients</h2>
        <ul className="list-disc list-inside text-gray-600">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Instructions</h2>
        <p className="text-gray-600">{recipe.instructions}</p>
      </section>
    </div>
  );
};

export default RecipeDetail;
