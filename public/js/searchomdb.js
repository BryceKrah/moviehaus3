'use strict'
const React = require('react');

const SearchOMDB = React.createClass({
  handleSubmit: function(event){
    event.preventDefault();
    console.log("submitttedd")

    var movieTitle = this.refs.movieTitle.value

    this.props.searchMovie(movieTitle)

    this.refs.movieSearchForm.reset();
  },


  render: function(){
    return (
      <div>
        <h1>Search For Movie</h1>
        <form ref="movieSearchForm" onSubmit={this.handleSubmit}>
          <input ref="movieTitle" type="text" placeholder="Title" />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
})

module.exports = SearchOMDB;
