'use strict'
const React = require('react');

const Nav = React.createClass( {

  render : function () {
    //set any vars/operations we may need for render
    return (
      <div id = "nav">
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo"><h5>Theatre #1</h5></a>
        </div>
      </nav>
      </div>
    )
  }
});

module.exports = Nav;
