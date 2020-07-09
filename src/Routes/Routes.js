import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Profile from '../pages/UserProfile/Profile';
import DetailsRecipeContent from '../pages/DetailsPage/DetailsRecipePage/DetailsRecipeContent';
import RecipesInProgressContent from '../pages/RecipesInProgress/RecipesInProgressPage/RecipesInProgressContent';
import Foods from '../pages/FoodMainPage/Foods';
import Drinks from '../pages/DrinkMainPage/Drinks';
import FavoriteRecipes from '../pages/FavoriteRecipes/FavoriteRecipes';
import Explorer from '../pages/ExplorerPages/Explorer';
import DrinkOrFoods from '../pages/ExplorerPages/ExplorerDrinkOrFood';
import ExplorerByIngredients from '../pages/ExplorerPages/ExplorerByIngredients';
import ExplorerByArea from '../pages/ExplorerPages/ExplorerByOrigem';
import NotFound from '../pages/ExplorerPages/NotFound';
import DoneRecipes from '../pages/DoneRecipes';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/explorar/bebidas/area" component={NotFound} />
      <Route path="/explorar/comidas/area" component={ExplorerByArea} />
      <Route path="/explorar/comidas/ingredientes" component={ExplorerByIngredients} />
      <Route path="/explorar/bebidas/ingredientes" component={ExplorerByIngredients} />
      <Route path="/explorar/comidas" component={DrinkOrFoods} />
      <Route path="/explorar/bebidas" component={DrinkOrFoods} />
      <Route path="/explorar" component={Explorer} />
      <Route exact path="/comidas/:id" component={DetailsRecipeContent} />
      <Route exact path="/bebidas/:id" component={DetailsRecipeContent} />
      <Route exact path="/comidas/:id/in-progress" component={RecipesInProgressContent} />
      <Route exact path="/bebidas/:id/in-progress" component={RecipesInProgressContent} />
      <Route exact path="/comidas" component={Foods} />
      <Route exact path="/bebidas" component={Drinks} />
      <Route exact path="/receitas-favoritas" component={FavoriteRecipes} />
      <Route exact path="/receitas-feitas" component={DoneRecipes} />
      <Route exact path="/perfil" component={Profile} />
      <Route exact path="/" component={Login} />
    </Switch>
  </HashRouter>
);

export default Routes;
