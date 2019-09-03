import React, { Component } from "react";
import Range from "react-input-range";
import { formatMoney } from "utils/formatMoney";
import PropTypes from "prop-types";

class InputRange extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <div className="inputRange">
        <div className="inputRange-container">
          <div className="inputRange-content">
            <div className="inputRange-content__top">
              <span className="inputRange-text">{this.props.titleRange}</span>
              <span className="inputRange-value">
                {formatMoney(this.state.value)} {this.props.unitRange}
              </span>
            </div>
            <form className="form">
              <Range
                maxValue={this.props.maxValueRange}
                minValue={0}
                value={this.state.value}
                onChange={value => this.setState({ value })}
              />
            </form>
            <div className="inputRange-content__bottom">
              <span className="inputRange-maxValue">
                Tối đa: {formatMoney(this.props.maxValueRange)}{" "}
                {this.props.unitMaxValue}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default InputRange;
InputRange.propTypes = {
  titleRange: PropTypes.string,
  unitRange: PropTypes.string,
  maxValueRange: PropTypes.number,
  unitMaxValue: PropTypes.string
};
InputRange.defaultProps = {};
