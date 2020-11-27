import { heros } from '../data/heros';

export function getHerosByName(name = '') {
  if (name === '') {
    return [];
  }

  name = name.toLocaleLowerCase();

  return heros.filter(hero =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
}
