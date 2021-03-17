import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Index from './Components/Index'
import Header from './Components/Header'
import Create from './Components/Create';
import Edit from './Components/Edit';
import Users_List from './Components/Users_List';

class App extends Component {
  render() {
    return (
      <Router>
          <Header/>
          <div className="container">
            <h1 className="text-center py-5 h-75 bg-light">Welcome</h1>
            <Switch>
                <Route exact path='/' component={ Index } />
                <Route exact path='/create' component={ Create } />
                <Route path='/edit/:id' component={ Edit } />
                <Route path='/list' component={ Users_List } />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;