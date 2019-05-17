import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Landing from './components/landing/Landing';
import Navbar from './layout/Navbar/Navbar';
import Index from './components/Index';
import Footer from './layout/Footer';

// Redux
import store from './store';
import { Provider } from 'react-redux';

// Css
import './css/app.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Index} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
