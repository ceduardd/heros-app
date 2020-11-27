import React, { useMemo } from 'react';
import { getHerosByPublisher } from '../../selectors/getHeroByPublisher';
import HeroCard from './HeroCard';

function HeroList({ publisher }) {
  const heros = useMemo(() => getHerosByPublisher(publisher), [publisher]);

  // const heros = getHerosByPublisher(publisher);

  return (
    <div className="card-columns animate__animated animate__fadeIn">
      {heros.map(hero => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
}

export default HeroList;
