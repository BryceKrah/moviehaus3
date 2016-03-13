'use strict'
const React = require('react');

const Nav = React.createClass( {

  render : function () {
    //set any vars/operations we may need for render
    return (
      <div id = "nav">
      <nav className="light-blue lighten-1" role="navigation">
        <div className="nav-wrapper container">
          <a id="logo-container" href="#" className="brand-logo"></a>
          <p>MovieHouse3</p>
        </div>
      </nav>
      </div>
    )
  }
});

module.exports = Nav;
