import React from 'react';
import { useHistory } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function BackButton() {
  const history = useHistory();
  const urlDrinks = window.location.pathname.includes('drinks');

  return (
    <button
      type="button"
      onClick={ () => (urlDrinks
        ? history.push('/drinks')
        : history.push('/foods')) }
    >
      <FontAwesomeIcon icon={ faArrowLeft } />
    </button>
  );
}

export default BackButton;
