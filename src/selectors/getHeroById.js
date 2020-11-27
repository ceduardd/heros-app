import { heros } from '../data/heros';

export function getHeroById(heroId) {
  return heros.find(hero => hero.id === heroId);
}
