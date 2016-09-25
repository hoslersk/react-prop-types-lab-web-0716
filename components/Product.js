// import React from 'react';
const React = require('react');

class Product extends React.Components {
  render() {
    return(
      <div className="product">
        <h1>Name: {this.props.name}</h1>
        <h2>Producer: {this.props.producer}</h2>
        <p>Watermarked? ({this.props.hasWatermark})</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: React.ProptTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequred, // only white/eggshell-white/salmon...
  // weight: React.PropTypes.number.isRequired // between 80 and 300
  weight: function(props, propName, componentName) {
    let weight = props[propName];
    if (weight < 80 || weight > 300) {
      return new Error(propName + ' in ' + componentName + " is above or below weight limits");
    }
  }
}

module.exports = Product;
// export default Product;


// In the components/Product.js file, create a Product React component.
// This component has the following props:
// name: a string — required
// producer: a string — optional
// hasWatermark: a boolean — optional, defaults to false
// color: a string — required, can only be 'white', 'eggshell-white' or 'salmon'
// weight: a number — required, ranges between 80 and 300
// Note: for the weight prop, we'll need custom logic. Remember that it's possible to write your own prop validator function!
