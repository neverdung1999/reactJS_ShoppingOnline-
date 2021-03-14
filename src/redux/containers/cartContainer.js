import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "../../components/body/cart";
import CartItem from "../../components/body/cartItem";
import CartResult from "../../components/body/cartResult";
import * as action from "../action/index";
import * as Message from "../constants/message";

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
    var result = (
      <tr>
        <td>
          <h3>{Message.MSG_CART_EMPTY}</h3>
        </td>
      </tr>
    );

    if (cart.length > 0) {
      var {
        onDeleteInCart,
        onChangeMessage,
        onUpdateQuantityInCart,
      } = this.props;
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            onDeleteInCart={onDeleteInCart}
            onChangeMessage={onChangeMessage}
            onUpdateQuantityInCart={onUpdateQuantityInCart}
          />
        );
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

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteInCart: (product) => {
      dispatch(action.onDeleteProductInCart(product));
    },
    onChangeMessage: (message) => {
      dispatch(action.actChangeMessage(message));
    },
    onUpdateQuantityInCart: (product, quantity) => {
      dispatch(action.onUpdateProductInCart(product, quantity));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cartContainer);
