import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class SearchForm extends Component{
  constructor(props){
    super(props);
    this.state = ({
      query: ""
    });
  }

  handleInput(event){

    this.setState({
      query: event.target.value
    });

  }

  handleSubmit(event){
    // console.log(event);
    event.preventDefault();
    this.props.history.push(`/search/${this.state.query}`);
  }
  render(){
    return(
      <div>
        <h1 className='.header__subtitle'>First Things First, Let's find you a local</h1>
        <h4>Search By Name or Suburb</h4>
        <form onSubmit={event => this.handleSubmit(event)}>
            <input type="text" onChange={ event => this.handleInput(event)}/>
            <input type="submit" value="search for local"/>
        </form>
      </div>
    )
  }
}

export default SearchForm
