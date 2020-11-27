import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

function LoginScreen({ history }) {
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    // history.push('/');

    const lastPath = localStorage.getItem('lastPath') || '/';

    const fixUser = {
      name: 'Eduardo',
      exp: '24h',
    };

    dispatch({
      type: types.login,
      payload: fixUser,
    });

    history.replace(lastPath); // Reemplaza la ruta actual con una nueva
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Enter
      </button>
    </div>
  );
}

export default LoginScreen;
