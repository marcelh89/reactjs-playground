import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
import loadable from "@loadable/component";

const Header = loadable(() => import(/* webpackChunkName: "Header" */ "./components/Header"));
const Button = loadable(() => import(/* webpackChunkName: "uikit" */ "dwa-v3-uikit/src/components/Atoms/Button/Button"));

const Footer = loadable(() => import(/* webpackChunkName: "Footer" */ "./components/Footer"));
const Home = loadable(() => import(/* webpackChunkName: "Home" */ "./pages/home/Home"));
const News = loadable(() => import(/* webpackChunkName: "News" */ "./pages/news/News"));

export interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <Helmet>
        <title>TItle | App</title>
      </Helmet>
      <Route path="/" render={() => <Header />} />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/news" render={() => <News />} />
        <Route path="/test" render={() => <Button />} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
