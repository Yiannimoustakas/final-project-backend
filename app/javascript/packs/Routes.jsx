// import React from 'react';
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults'
import ShowPub from './components/ShowPub'

class Routes extends React.Component{
  render(){
    return(
    <Router>
      <div>
        <Route exact path='/'               component={SearchForm}/>
        <Route exact path="/search/:query"  component={ SearchResults  } />
        <Route exact path='/pub/:id'        component={ShowPub}/>

      </div>
    </Router>
  )
  }
};

export default Routes;
