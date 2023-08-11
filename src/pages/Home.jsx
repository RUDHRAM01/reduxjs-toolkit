import React from "react";
import LandingPage from "../components/LandingPage";
import {Switch,Route} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </>
  );
};

export default Home;
