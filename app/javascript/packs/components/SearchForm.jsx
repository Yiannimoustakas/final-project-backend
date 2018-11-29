import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class SearchForm extends Component{

  constructor(props){
    super(props);
    this.state = ({
      query: "",
      distance: 15,
      geolocation: null,
      // location: {}
    });
  };

  componentDidMount(){
    if ("geolocation" in navigator) {
      /* geolocation is available */
      this.setState({ geolocation: true });

      navigator.geolocation.getCurrentPosition(position => {
        // console.log('this inside geo:', this);
        this.setState({
          geolocation: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        });
      });

    }
  };

  handleInput(event){

    this.setState({
      query: event.target.value
    });
  };

  handleSubmit(event){
    // console.log(event);
    event.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
  };



  render(){

    let geolocationForm = '';

    if( this.state.geolocation ){
      geolocationForm = (
        <span>
          OR show results within (dropdown) 15 km
          <Link to={{
            pathname: `/geosearch/${this.state.distance}`,
            state: {
              lat: `${parseFloat(this.state.geolocation.lat)}`,
              lng: `${parseFloat(this.state.geolocation.lng)}`,
              distance: `${parseInt(this.state.distance)}`
            }
          }} >Go</Link>
        </span>
      );
    }

    return(
      <div>
        <h1 className='.header__subtitle'>First Things First, Let's find you a local</h1>
        <h4>Search By Name or Suburb</h4>
        <form onSubmit={event => this.handleSubmit(event)}>
            <input type="text" onChange={ event => this.handleInput(event)}/>
            <input type="submit" value="search for local"/>
            { geolocationForm }
        </form>
      </div>
    )
  }
}

export default SearchForm
