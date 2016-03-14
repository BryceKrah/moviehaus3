'use strict'
const React = require('react');


const SearchResult = React.createClass({
  handleClick: function(event){
    event.preventDefault();
    console.log(this.props.movieSearch)

    this.props.addMovie(this.props.movieSearch)

  },

  cancelSearch: function(event){
    event.preventDefault();
    this.props.cancelSearch()
  },

  render: function(){
    return(
      <div className="search-results-container">
        <div className="search-result">
        <div>{this.props.movieSearch.Title}</div>
        <div>{this.props.movieSearch.Year}</div>
        <img src={this.props.movieSearch.Poster} />
        <button onClick={this.handleClick} type="submit">Add</button>
        <button onClick={this.cancelSearch}>Cancel</button>
        </div>
      </div>
    )
  }
})

module.exports = SearchResult;
