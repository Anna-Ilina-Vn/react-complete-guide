import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Budget from './pages/budget';

function App() {

  return (
    <div className="App">
      <div className="App-body">
        <h1>HI! I am Anna Ilina.</h1>
        I am a  Java Script developer. I have a drive to develop my programming skills. Open to new directions.
        In the navigation you can discover my ralizations of different technoligies.
      </div>
      <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/budget' exact component={Budget} />
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
