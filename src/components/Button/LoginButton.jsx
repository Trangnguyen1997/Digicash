import React, { Component } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Button>{this.props.titleButton}</Button>
      </div>
    );
  }
}

export default LoginButton;
LoginButton.propTypes = {
  titleButton: PropTypes.string
};
LoginButton.defaultProps = {};
