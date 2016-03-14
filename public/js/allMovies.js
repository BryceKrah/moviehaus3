'use strict'
const React = require('react');

const AllMovies = React.createClass( {

    render: function() {
    return (
          <div className="movies" >
          {/*to do unfinished tasks*/}
            <img width="180" src={this.props.details.poster} />
            <h4>{this.props.details.title}</h4>
            <p>Times will be here</p>
          </div>
    )
  }
})



module.exports = AllMovies;
