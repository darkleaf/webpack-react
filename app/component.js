var React = require('react');

var HelloMessage = React.createClass({
  displayName: "HelloMessage",
  render: function() {
    return React.createElement("div", null, "Hell ", this.props.name);
  }
});

module.exports = HelloMessage;
