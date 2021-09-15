import './App.css';
import HelloWorld from './HelloWorld';
import TodoList from './TodoList';
import Home from './Home'
import PageNotFound from './PageNotFound'
import PassingProps from './PassingProps';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  const name = 'Derry'
  return (
    <Router>
      <div className="style.app">
        <nav>
          <ol>
          <li>
              <Link to= "/">Home</Link>
            </li>
            <li>
              <Link to= "/hello-world">Hello World</Link>
            </li>
            <li>
              <Link to= "/todo-list">Todo List</Link>
            </li>
            <li>
              <Link to= "/passing-props">PassingProps</Link>
            </li>
          </ol>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/hello-world">
            <HelloWorld
              message = "Hello"
              name= {name}
            />
          </Route>
          <Route path="/todo-list">
            <TodoList/>
          </Route>
          <Route path="/passing-props">
            <PassingProps/>
          </Route>
          <Route exact path="*">
            <PageNotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;