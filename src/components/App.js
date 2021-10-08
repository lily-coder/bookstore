/* eslint no-unused-vars: 0 no-undef: 0 */
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar.js';
import BookList from './BookList.js';
import Categories from '../pages/Categories.js';
import styles from './App.css';

function App() {
  return (
    <>
      <Route>
        <div>
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <BookList />
            </Route>
            <Route exact path='/Categories'>
              <Categories />
            </Route>
          </Switch>
        </div>
      </Route>
    </>
  );
}

export default App;