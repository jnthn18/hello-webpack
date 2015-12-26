require('./../stylesheets/global.sass');

'use strict'

var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
  render: function() {
    return (
      <div>Hello Webpack now using React!</div>
    );
  }
});

ReactDOM.render(
  <Hello />,
  document.getElementById('container')
);