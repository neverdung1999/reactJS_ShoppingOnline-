import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Message from "../../components/body/message";

export class messageContainer extends Component {
  render() {
    var { message } = this.props;
    return (
      <div>
        <Message message={message} />
      </div>
    );
  }
}

messageContainer.propTypes = {
  message: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.Message,
});

export default connect(mapStateToProps, null)(messageContainer);
