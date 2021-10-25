import { BrowserRouter as Router } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import LevelFilter from './levelFilter';
function App() {

  return (
    <Router>
    <div className="container">
      <Header subtitle="iAbacus"/>
      <LevelFilter />
    </div>
    </Router>
  );
}

export default App;
