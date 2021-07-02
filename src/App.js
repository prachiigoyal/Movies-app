import Movies from './Components/Movies'
import About from './Components/About'
import Home from './Components/Home'
import Nav from './Nav'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import 

function App() {
  return (
    <Router>
    <Nav/>
    <Switch>
    <Route path='/' exact component={Home}/>
    <Route path='/movies' exact component={Movies}/>
    <Route path='/about' exact component={About}/>

    </Switch>
    </Router>
  );
}

export default App;
