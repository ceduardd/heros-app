import React from 'react';
import { Link } from 'react-router-dom';

function HeroCard({ id, superhero, alter_ego, first_appearance, characters }) {
  return (
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            className="card-img"
            src={`assets/heros/${id}.jpg`}
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            {alter_ego !== characters && <p>{characters}</p>}
            <p className="card-tex">
              <span className="text-muted">{first_appearance}</span>
            </p>

            <Link to={`./hero/${id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
