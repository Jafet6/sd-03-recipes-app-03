import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { RecipeInProgressContext } from '../RecipeInProgressProvider';
import IngredientsCheckbox from './IngredientsCheckbox';
import ContentHeader from '../../../components/ContentHeader/ContentHeader';
import './RecipeInProgressComponent.css';

let today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = `${dd} / ${mm} / ${yyyy}`;

const finishingRecipe = (recipeObj) => {
  const { id, name, area, category, alcoholic = '', img } = recipeObj;
  let { tags = '', type } = recipeObj;

  type = 'comida';

  if (tags !== null && tags.includes(',')) {
    tags = tags.split(',');
  } else {
    tags = [tags];
  }

  const doneRecipes = {
    id, type, area, category, alcoholicOrNot: alcoholic, name, image: img, doneData: today, tags,
  };
  const startedRecipe = JSON.parse(localStorage.getItem('doneRecipes'));
  if (!startedRecipe) return localStorage.setItem('doneRecipes', JSON.stringify([doneRecipes]));
  return localStorage.setItem('doneRecipes', JSON.stringify([...startedRecipe, doneRecipes]));
};

const RecipeInProgressComponent = () => {
  const [disabled, setDisabled] = useState(true);
  const { recipeData } = useContext(RecipeInProgressContext);
  const { instructions, ingredients = [], type, id, englishType } = recipeData;
  const finishButton = () => {
    const inProgressType = JSON.parse(localStorage.getItem('inProgressRecipes'))[englishType];
    if (inProgressType[id].length === ingredients.length) return setDisabled(false);
    return setDisabled(true);
  };
  return (
    <div className="details-meals-container">
      <div className="details-meals-content">
        <ContentHeader />
        <h2>Ingredients</h2>
        {ingredients.map(([ingredient, quantity], index) =>
          <IngredientsCheckbox
            key={ingredient + quantity}
            ingredient={ingredient}
            quantity={quantity}
            type={type}
            englishType={englishType}
            index={index}
            id={id}
            finishButton={finishButton}
          />,
        )}
        <h2>Instructions</h2>
        <p className="instructions-container" data-testid="instructions">{instructions}</p>
        <Link to="/receitas-feitas">
          <button
            data-testid="finish-recipe-btn"
            type="button"
            disabled={disabled}
            onClick={() => finishingRecipe(recipeData)}
          >
              Finalizar Receita
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RecipeInProgressComponent;
