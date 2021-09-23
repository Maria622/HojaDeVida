import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Portafolio from './pages/Portafolio';
import Home from './pages/Home';
import Error404 from './pages/Error404';



function App() {

  
  return (
   
   
    <Router>
      <Switch>
      

        <Route path="/portafolio">
          <Portafolio />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route path="*">
          <Error404/>
        </Route>

      </Switch>

    </Router>
   
  );
}

export default App;