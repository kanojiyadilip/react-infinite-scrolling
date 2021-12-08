import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Login from './login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;