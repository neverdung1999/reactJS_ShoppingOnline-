import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../../components/body/products";
import ProductItem from "../../components/body/productItem";
import PropTypes from "prop-types";
import * as action from "../action/index";

export class productContainer extends Component {
  render() {
    var { product } = this.props;
    return <Products>{this.showProducts(product)}</Products>;
  }

  showProducts(products) {
    var result = null;

    if (products.length > 0) {
    var { onAddtoCart, onMessageChange } = this.props;
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            onAddtoCart={onAddtoCart}
            onMessageChange={onMessageChange}
          />
        );
      });
    }

    return result;
  }
}

productContainer.propTypes = {
  product: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
  onMessageChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.Product,
});

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddtoCart: (product) => {
      dispatch(action.actAddtoCart(product, 1));
    },
    onMessageChange: (message) => {
      dispatch(action.actChangeMessage(message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(productContainer);
