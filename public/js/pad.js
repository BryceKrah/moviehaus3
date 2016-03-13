'use strict'
const React = require('react');


const Test = React.createClass({
  handleClick: function(event){
    event.preventDefault();
    console.log("clicked add movie button")
  },

  render: function(){
    return(
      <div>
        <h1>{this.props.movieSearch.Title}</h1>
        <h3>{this.props.movieSearch.Year}</h3>
        <img src={this.props.movieSearch.Poster} />
        <button onClick={this.handleClick} type="submit">Add</button>
      </div>
    )
  }
})

module.exports = Test;
