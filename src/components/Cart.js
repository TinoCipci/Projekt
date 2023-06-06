import React from 'react';
import '../cart.css';
import Product from './Product';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  renderCartItems() {
    const { cartItems } = this.state;
    if (cartItems.length === 0) {
      return <p>Your cart is empty.</p>;
    }

    return cartItems.map((item, index) => (
      <div key={index} className="cart-item">
        <img src={item.image} alt={item.name} />
        <div>
          <h4>{item.name}</h4>
          <p>Price: {item.price} €</p>
        </div>
      </div>
    ));
  }

  handleAddToCart = (product) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  }

  render() {
    const { cartItems } = this.state;
    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
      <div className="cart">
        <h2>Cart</h2>
        <div className="cart-items">
          {this.renderCartItems()}
        </div>
        <div className="cart-total">
          <p>Total: <span id="cart-total-amount">{cartTotal} €</span></p>
          <button className="cart-checkout">Checkout</button>
        </div>
      </div>
    );
  }
}

export default Cart;