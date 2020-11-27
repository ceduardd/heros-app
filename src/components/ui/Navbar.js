import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

function Navbar() {
  const { user, dispatch } = useContext(AuthContext);

  const history = useHistory();

  const handleLogout = () => {
    history.replace('/login');

    dispatch({
      type: types.logout,
    });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          HerosApp
        </Link>
        <div className="navbar-collapse">
          <div className="navbar-nav">
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/marvel"
            >
              Marvel
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/dc"
            >
              DC
            </NavLink>
            <NavLink
              activeClassName="active"
              className="nav-item nav-link"
              exact
              to="/search"
            >
              Search
            </NavLink>
          </div>
        </div>

        <div className="navbar-collapse collapse w-100 order-3 dual-collapse">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item nav-link text-info">{user.name}</span>
            <button className="btn btn-outline-primary" onClick={handleLogout}>
              Logout
            </button>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
