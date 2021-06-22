import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/check-out-cart-items/check-out-cart-items.components";
import {
  selectCartItems,
  selectCartItemTotal,
} from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe/stripe.components";
import hideSignInOption from "../../redux/sign-in-option/sign-in-option.actions";

import "./checkout.styles.scss";

const Checkout = ({ cartItems, total, hideSignInOption }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL:Rs.{total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test credit for Payment*
      <br></br>
      4242 4242 4242 4242
      <br></br>
      Exp-01/30 - CVC:123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemTotal,
});

const mapDispatchToProps = (dispatch) => ({
  hideSignInOption: () => dispatch(hideSignInOption()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
