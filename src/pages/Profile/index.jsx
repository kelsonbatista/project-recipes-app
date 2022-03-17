import React from 'react';
import PropTypes from 'prop-types';
import HeaderWithSearch from '../../components/Header/HeaderWithSearch';
import Footer from '../../components/Footer';
import '../../index.css';

function Profile({ history }) {
  const userEmail = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <HeaderWithSearch name="Profile" verific={ false } />
      {userEmail && (
        <div className="w-11/12 h-screen mx-auto py-10 px-5 flex flex-col">
          <p data-testid="profile-email" className="m-3">
            {`Email: ${userEmail.email}`}
          </p>
          <div className="flex flex-col md:flex-row">
            <button
              type="button"
              className="button-style"
              data-testid="profile-done-btn"
              onClick={ () => history.push('/done-recipes') }
            >
              Done Recipes
            </button>
            <button
              className="button-style"
              type="button"
              data-testid="profile-favorite-btn"
              onClick={ () => history.push('/favorite-recipes') }
            >
              Favorite Recipes
            </button>
            <button
              className="button-style"
              type="button"
              data-testid="profile-logout-btn"
              onClick={ () => {
                localStorage.clear();
                history.push('/');
              } }
            >
              Logout
            </button>
          </div>
        </div>
      ) }
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.instanceOf(Object),
}.isRequired;

export default Profile;
