import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import OrderMade from './OrderMade'

class Order extends Component{
  render(){
    return(
      <div>
      <h1>My Order</h1>
      <div className="order__emoji">
        <span role="img" aria-label="point">
          🍺
        </span>
      </div>
      {
        this.props.order.length===0
        ?
        <div></div>
        :
        <div>
          <div>Current Order</div>
          <ul>
            {this.props.order.map(o => <li>1x {o.name}</li>)}
          </ul>
          <div>Total Price</div>
          <div>
            ${this.props.price}.00
          </div>
        </div>
      }
      {!this.props.orderStatus ?
      <div>
        <button className="order__submit" onClick={this.props.handleSubmit}>
          Submit Order
        </button>
        <button className="order__reset" onClick={this.props.handleReset}>
          Reset Order
        </button>
      </div> :
      <div>
        <OrderMade order={this.props.order} price={this.props.price} orderID={this.props.orderID}/>
      </div>
      }
    </div>
    )
  }
}

export default Order
