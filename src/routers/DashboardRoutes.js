import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DCScreen from '../components/dc/DCScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/Navbar';

function DashboardRoutes() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Switch>
          <Route exact path="/marvel" component={MarvelScreen} />
          <Route exact path="/dc" component={DCScreen} />
          <Route exact path="/search" component={SearchScreen} />

          <Route exact path="/hero/:heroId" component={HeroScreen} />

          <Redirect to="/marvel" />
        </Switch>
      </div>
    </>
  );
}

export default DashboardRoutes;
