'use strict'

const React = require('react')
const ReactDOM = require('react-dom')

var MyComponent = React.createClass({
  render: function() {
    return <div>React,Hello World</div>;
  }
});

ReactDOM.render(<MyComponent />, document.querySelector('container'));
