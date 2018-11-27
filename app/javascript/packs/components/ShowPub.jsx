import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import SearchResults from './SearchResults';
import Order from './Order'
import axios from 'axios';
import Geocode from "react-geocode";

const ORDER_URL = 'http://localhost:3000/orders/new'

class ShowPub extends Component {
  constructor(){
    super();
    this.state = {
      pub: [],
      order: [],
      price: 0
    };
  };

  componentDidMount(){
    this.showPub(this.props.match.params.id);
  }

  handleClick(e, drink){
    e.preventDefault()
    this.setState({order: this.state.order.concat(drink.name)})
    this.setState({price: this.state.price + drink.price})
  }

  submitOrder = () => {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(
      `Welcome to Hey Bru. You have ordered ${this.state.order.map(item => `the house ${item}`)}. This comes to a total of ${this.state.price} dollars. Your order will be ready to pick up from ${this.state.pub.name} in 15 minutes.`
    )
    const utterThat = new SpeechSynthesisUtterance(`You haven't ordered anything. Please select a beverage before submitting.`)
    {this.state.order.length === 0 ? synth.speak(utterThat) :
    synth.speak(utterThis)}
    axios.post(ORDER_URL, this.state.pub.id, this.state.pub.drinks)
    .then(response => {

    })
    .catch(console.warn)
  }

  resetOrder = () => {
    this.setState({
      order: [],
      price: 0,
    })
  }

  handleBackClick(event){
    event.preventDefault();
    this.props.history.goBack()
  }

  showPub(id) {
    const pub_URL = `http://localhost:3000/pub/${id}.json`
    axios.get(pub_URL)
    .then(response => {
      this.setState({pub: response.data})
      console.log();
    })
    .catch(console.warn)
  }

  render() {
    if (!this.state.pub.name){
      return <div>Loading...</div>
    }
    return(
      <div className="menu">
        <div className="menuitems">
          <div>
            <h1>{this.state.pub.name}</h1>
            <br/>
            <span className="back__button" onClick={e => this.handleBackClick(e)}>Back To Results</span>
            <br/>
            <h3>Menu</h3>
            <ul>
              {this.state.pub.drinks.map(d => <li>{d.emoji}{d.name} <span><strong>Price:</strong> ${d.price}.00</span> <button onClick={event => this.handleClick(event, d)}>Order</button></li>)}
            </ul>
            <br/>
            <h3>Location</h3>
            <p>{this.state.pub.location}</p>
            <br/>
            <h3>Map</h3>
          </div>
        </div>
        <div className="order__wrapper">
          <Order order={this.state.order} price={this.state.price} handleReset={this.resetOrder} handleSubmit={this.submitOrder}/>
        </div>
      </div>
    )
  }
}



export default ShowPub
