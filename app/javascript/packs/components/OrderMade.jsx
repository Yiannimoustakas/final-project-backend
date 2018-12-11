import React, {Component} from 'react'

/* This is the result of completing the order. Only rednering the div saying that order is successful. */

const OrderMade = ({order, price, orderID}) => (
  <div>
    <div className="order__text">Order Successful!</div>
    {/*<button className="order__reset">Edit Order</button>
    <button className="order__reset">Cancel Order</button>
    <button className="order__reset">Profile Page</button>*/}
  </div>
)

export default OrderMade
