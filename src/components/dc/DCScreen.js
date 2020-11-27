import React from 'react';
import HeroList from '../heroes/HeroList';

function DCScreen() {
  return (
    <div>
      <h1>DC</h1>

      <hr />

      <HeroList publisher="DC Comics" />
    </div>
  );
}

export default DCScreen;
