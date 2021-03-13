import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../../components/body/cart";
import CartItem from "../../components/body/cartItem";
import CartResult from "../../components/body/cartResult";
import * as messageAction from "../../redux/constants/message";

export class cartContainer extends Component {
  render() {
    var { cart } = this.props;
    return (
      <div>
        <Cart>
          {this.showCartItem(cart)} {this.showTotalCart(cart)}
        </Cart>
      </div>
    );
  }

  showCartItem = (cart) => {
    var result = messageAction.MSG_CART_EMPTY;

    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item} />;
      });
    }

    return result;
  };

  showTotalCart = (cart) => {
    var result = null;

    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }

    return result;
  };
}

cartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }).isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => ({
  cart: state.Cart,
});

export default connect(mapStateToProps, null)(cartContainer);
