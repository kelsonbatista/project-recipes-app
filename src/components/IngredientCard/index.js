import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import { useHistory } from 'react-router-dom';
import ContextApp from '../../context/ContextApp';
import fetchAPI from '../../services/drinks&mealsAPI';

function IngredientCard({ data, type, index }) {
  const { setIsLoading } = useContext(ContextApp);
  const MEAL_IMG_SRC = `https://www.themealdb.com/images/ingredients/${data}-Small.png`;
  const DRINK_IMG_SRC = `https://www.thecocktaildb.com/images/ingredients/${data}-Small.png`;
  const { setDrinks, setFoods } = useContext(ContextApp);
  const history = useHistory();

  const handleRedirect = async () => {
    if (type === 'foods') {
      const response = await fetchAPI(setIsLoading, type, 'ingredient', data);
      setFoods(response.meals);
      history.push('/foods/');
    } else {
      const response = await fetchAPI(setIsLoading, type, 'ingredient', data);
      setDrinks(response.drinks);
      history.push('/drinks/');
    }
  };

  return (
    <div
      data-testid={ `${index}-ingredient-card` }
      className="card-effect button-effect mb-8"
    >
      <button
        type="button"
        onClick={ handleRedirect }
      >
        <h2
          data-testid={ `${index}-card-name` }
          className="w-36 text-base truncate"
        >
          {data}
        </h2>
        <img
          src={ type === 'drinks' ? DRINK_IMG_SRC : MEAL_IMG_SRC }
          className="h-36 rounded-lg"
          alt={ data }
          data-testid={ `${index}-card-img` }
        />
      </button>
    </div>
  );
}

IngredientCard.propTypes = {
  strIngredient: PropTypes.string,
  type: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default IngredientCard;
