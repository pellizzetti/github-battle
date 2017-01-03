import React from 'react';
import { Router, hashHistory, Route, IndexRoute } from 'react-router';
import AppComponent from '../App.Component';
import HomeComponent from '../home/Home.Component';
import PromptContainer from '../prompt/Prompt.Container';
import ConfirmBattleContainer from '../battle/ConfirmBattle.Container';
import ResultsContainer from '../battle/Results.Container';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={AppComponent}>
      <IndexRoute component={HomeComponent} />
      <Route path="playerOne" header="Player One" component={PromptContainer} />
      <Route path="playerTwo/:playerOne" header="Player Two" component={PromptContainer} />
      <Route path="confirmBattle" component={ConfirmBattleContainer} />
      <Route path="results" component={ResultsContainer} />
    </Route>
  </Router>
);

export default routes;
