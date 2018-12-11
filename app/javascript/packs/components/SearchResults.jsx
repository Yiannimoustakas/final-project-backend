import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import SearchForm from './SearchForm';
import MapContainer from './MapContainer';


class SearchResults extends Component{

  /*
    We need to set up the pubs data as an array. We also need to set the query string we received from the searchForm and add it to our state once we handle the params.
  */
  constructor(){
    super();
    this.state = {
      pubs: [],
      query: '',
    }
  };

  /*
    componentDidMount() ensures we receive the data after every page rendering. If the users browser can obtain the goe location of the user then perform the geoSearch() function. Otherwise we perform the performSearch() function
  */
  componentDidMount(){
    if (this.props.match.params.query.length === 0){
      const coords = {lat: parseFloat(this.props.location.state.lat), lng: parseFloat(this.props.location.state.lat)}
      const distance = parseInt(this.props.location.state.distance)
      this.performGeoSearch(coords, distance);
    } else {
      this.performSearch(this.props.match.params.query);
      setInterval(this.performSearch(this.props.match.params.query), 5000)
    }
  }

  /*
    This was going to be my way of adding boundaries to the map but ran out of time. This is an upcoming feature.
  */
  performGeoSearch(coords, distance){
    const GEO_URL = `/geosearch/${this.props.match.params.distance}.json`
    axios.post(GEO_URL, {
      coords,
      distance
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(console.warn)
  }

  performSearch( query ) {
    /*
      const pubresults_URL = `http://localhost:3000/pubs/search/${this.props.match.params.query}.json`;
    */
    const pubresults_URL = `/pubs/search/${this.props.match.params.query}.json`;

    /*
      Setting the relevant data into state.
    */
    axios.get( pubresults_URL )
    .then(response => {
      // console.log("response", response.data);
      this.setState({pubs: response.data})
      this.setState({query: this.props.match.params.query})
    })
    .catch(console.warn)
  };

  handleBackClick(event){
    /* Back button event handler  */
    event.preventDefault();
    this.props.history.goBack()
  }

  render(){
    if (this.state.pubs.length < 0){
      return <div>Loading Results...</div>
    }
    return(
        <div>
        <h1>Search Results for: "{this.props.match.params.query}"</h1>
        <Link to='/' className="back__button">Back To Search</Link>
        {this.state.pubs.length === 0 ? <div className="menuitem__name">Loading...</div> :
          <ul>
            {this.state.pubs.map(p => (
              <li className="pub__list menuitem__name"  key={p.id}>
                <Link to={`/pub/${p.id}`} query={this.state.query}>
                  {p.name} ({p.location})
                </Link>
              </li>
            ))}
          </ul>
        }
        <h2>Map</h2>
        {/*
          We send the pubs array data to the map container to set up our map configuration
        */}
        <div className="map__box">
          {this.state.pubs.length > 0 && <MapContainer items={this.state.pubs} />}
        </div>
      </div>
    )
  }
}

export default SearchResults;
