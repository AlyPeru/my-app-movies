import style from './App.module.css';
import { BrowserRouter as Router, Switch , Route, Link } from "react-router-dom";
import { MoviesDetail } from "./Pages/MoviesDetail";
import { LandingPage } from "./Components/LandingPage";
export function App() {
  return (
    <Router>
      <header>
        <Link to ='/'><h1 className={style.title}>Movies</h1></Link>
      </header>
      <main>
        <Switch>
          <Route exact path = "/movies/:idMovie"><MoviesDetail /></Route>
          <Route exact path = "/"><LandingPage/></Route>
          <Route path = "/"> 404 </Route>
        </Switch>
      </main>
    </Router>
  );
}
