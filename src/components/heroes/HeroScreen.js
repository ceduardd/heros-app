import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

function HeroScreen({ history }) {
  // const params = useParams();
  // console.log(params);

  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  // const hero = getHeroById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    if (history.length <= 2) {
      history.push('/');
    } else {
      history.goBack();
    }
  };

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="row mt-4">
      <div className="col-4">
        <img
          className="img-thumbnail animate__animated animate__fadeInLeft"
          src={`../assets/heros/${heroId}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="col-8 animate__animated animate__fadeIn">
        <h5>{superhero}</h5>
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <strong>Alter ego</strong>: {alter_ego}
          </div>
          <div className="list-group-item">
            <strong>Publisher</strong>: {publisher}
          </div>
          <div className="list-group-item">
            <strong>First appearance</strong>: {first_appearance}
          </div>

          <div className="list-group-item">
            <strong>Characters</strong>: {characters}
          </div>
        </div>
        <button onClick={handleReturn} className="btn btn-outline-info">
          Return
        </button>
      </div>
    </div>
  );
}

export default HeroScreen;
