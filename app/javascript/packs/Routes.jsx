// import React from 'react';
import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';

import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults'
import ShowPub from './components/ShowPub'

{/* I used router for this project just for the important pages. It makes it easier to move between components. Smaller components are rednered within the main ones listed here. */}

class Routes extends React.Component{
  render(){
    return(
    <Router>
      <div>
        <Route exact path='/'               component={SearchForm}/>
        <Route path={["/search/:query", "geosearch/:distance"]}  component={ SearchResults  } />
        <Route exact path='/pub/:id'        component={ShowPub}/>

      </div>
    </Router>
  )
  }
};

export default Routes;
