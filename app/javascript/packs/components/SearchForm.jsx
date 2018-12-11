import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

/* SearchForm is the first page to the react site. We are doing a lot of setup here such as setting the users query event in state, adding the geolocation position, and  distance. */

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
    /* This is an upcoming feature. Users will be able to search depending on how close they are to their relevant local bar or pub. */
    if( this.state.geolocation ){
      geolocationForm = (
        <span>
          <br/>
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
        <div className="searchform__container">
          <div className="searchform__div">
            <h1 className='.header__subtitle'>First Things First, Let's find you a local</h1>
            <h4>Search By Name or Suburb</h4>
            <form className='form' onSubmit={event => this.handleSubmit(event)}>
                <input className='input' type="text" onChange={ event => this.handleInput(event)}/>
                <i className="fa fa-search"></i>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchForm
