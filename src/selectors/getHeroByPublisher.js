import { heros } from '../data/heros';

export function getHerosByPublisher(publisher) {
  const validPublishers = ['DC Comics', 'Marvel Comics'];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} is wrong`);
  }

  return heros.filter(hero => hero.publisher === publisher);
}
