import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import queryString from 'query-string';
import { getHerosByName } from '../../selectors/getHerosByName';

function SearchScreen({ history }) {
  const location = useLocation();
  const { q = '' } = queryString.parse(location.search);

  // console.log(q);

  const [values, handleChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const heroesFiltered = useMemo(() => getHerosByName(q), [q]);

  const handleSearch = e => {
    e.preventDefault();

    history.push(`?q=${searchText}`);

    // resetValues();
  };

  return (
    <div className="row">
      <div className="col-5">
        <h4>Search Hero</h4>
        <hr />

        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control"
            placeholder="Hero name..."
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={handleChange}
          />

          <button type="submit" className="btn btn-outline-info btn-block mt-2">
            Search...
          </button>
        </form>
      </div>

      <div className="col-7">
        <h4>Results</h4>
        <hr />

        {(q === '' || heroesFiltered.length === 0) && (
          <div className="alert alert-info">There are no results</div>
        )}

        {heroesFiltered.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
}

export default SearchScreen;
