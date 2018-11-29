import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import SearchResults from './SearchResults';
import Order from './Order'
import axios from 'axios';
import Geocode from "react-geocode";

// const ORDER_URL = 'http://localhost:3000/orders.json'
const ORDER_URL = '/orders.json'

class ShowPub extends Component {
  constructor(){
    super();
    this.state = {
      pub: {},
      order: [],
      price: 0,
      orderStatus: false,
      orderID: ''
    };
  };

  componentDidMount(){
    this.showPub(this.props.match.params.id);
  }

  handleClick(drink){
    const order = [...this.state.order];
    order.push({
      id: drink.id,
      name: drink.name
    });
    this.setState({
      order,
      price: this.state.price + drink.price
    });
  }

  utterThis = () => {
    const synth = window.speechSynthesis
    const utterThis = new SpeechSynthesisUtterance(
      `Welcome to Hey Bru. You have ordered ${this.state.order.map(item => `the house ${item.name}`)}. This comes to a total of ${this.state.price} dollars. Your order will be ready to pick up from ${this.state.pub.name} in 15 minutes.`)
      synth.speak(utterThis)
  }

  utterThat = () => {
    const synth = window.speechSynthesis
    const utterThat = new SpeechSynthesisUtterance(`You haven't ordered anything. Please select a beverage before submitting.`)
    synth.speak(utterThat)
  }

  submitOrder = () => {
    {this.state.order.length === 0 ? this.utterThat() : this.utterThis()}

    if (this.state.order.length === 0){
      return;
    }

    const drinkIDs = this.state.order.map(d => d.id)

    axios.post(ORDER_URL, {
      pub_id: this.state.pub.id,
      drink_ids: drinkIDs
    })
    .then(response => {
      console.log(response.data);
      this.setState({orderStatus: true, orderID: response.data.order.id})
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
    {/*const pub_URL = `http://localhost:3000/pub/${id}.json`*/}
    const pub_URL = `/pub/${id}.json`
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
            <span className="back__button" onClick={e => this.handleBackClick(e)}>Back</span>
            <br/>
            <div className="menuitem__wrapper">
              <h3>Menu</h3>
              <ul className="menuitem__column">
                {this.state.pub.drinks.map(d => <li className="menuitem__name">{d.emoji}{d.name} <strong>Price:</strong> ${d.price}.00 <button className="menuitem__button" onClick={() => this.handleClick(d)}>Order</button></li>)}
              </ul>
              <br/>
            </div>
            <h3>Location</h3>
            <p>{this.state.pub.location}</p>
          </div>
        </div>
        <div className="order__wrapper">
          <Order order={this.state.order} price={this.state.price} handleReset={this.resetOrder} handleSubmit={this.submitOrder} orderStatus={this.state.orderStatus} orderID={this.state.orderID}/>
        </div>
      </div>
    )
  }
}



export default ShowPub
