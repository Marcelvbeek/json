import React, { Component } from 'react';

class Button extends Component {
  render() {
    return (
        <button type="button" className={"btn btn-" + this.props.class + " px-4"}>
            {this.props.title}
        </button>
    );
  }
}

export default Button;