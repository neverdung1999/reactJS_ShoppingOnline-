import React, { Component } from "react";
import { connect } from "react-redux";
import Products from "../../components/body/products";
import ProductItem from "../../components/body/productItem";
import PropTypes from "prop-types";

export class productContainer extends Component {
  render() {
    var { product } = this.props;
    return <Products>{this.showProducts(product)}</Products>;
  }

  showProducts(products) {
    var result = null;

    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} />;
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
};

const mapStateToProps = (state) => ({
  product: state.Product,
});

export default connect(mapStateToProps, null)(productContainer);
