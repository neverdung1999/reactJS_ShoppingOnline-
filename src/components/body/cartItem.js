import React, { Component } from "react";
import * as Message from "../../redux/constants/message";

class cartItem extends Component {
  render() {
    var { item } = this.props;
    var {  quantity  } = item;
    return (
      <tr>
        <th scope="row">
          <img
            src={item.product.img}
            alt={item.product.name}
            className="img-fluid z-depth-0"
          />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(item.product, quantity - 1)}
            >
              <a>—</a>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantity(item.product, quantity + 1)}
            >
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{this.totalCart(item.product.price, item.quantity)}$</td>
        <td>
          <button
            type="button"
            className="btn btn-sm btn-primary waves-effect waves-light"
            data-toggle="tooltip"
            data-placement="top"
            title=""
            data-original-title="Remove item"
            onClick={() => this.onDeleteItem(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    );
  }

  totalCart(a, b) {
    var total = 0;
    total = a * b;
    return total;
  }

  onUpdateQuantity = (product, quantity) => {
    var { onUpdateQuantityInCart, onChangeMessage } = this.props;
    if (quantity > 0) {
      onUpdateQuantityInCart(product, quantity);
      onChangeMessage(Message.MSG_UPDATE_TO_CART_SUCCESS);
    }
  };

  onDeleteItem = (product) => {
    var { onDeleteInCart, onChangeMessage } = this.props;
    onDeleteInCart(product);
    onChangeMessage(Message.MSG_DELETE_TO_CART_SUCCESS);
  };
}

export default cartItem;
