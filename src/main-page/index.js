import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import RandomSerie from './random-Serie';
import LevelFilter from './levelFilter';
function App() {

  return (
    <Router>
    <div className="container">
      <Header subtitle="iAbacus"/>
      <LevelFilter />
      <Switch>
         <Route path="/randomSerie/:indexArray/:min/:max" >
           <RandomSerie/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
