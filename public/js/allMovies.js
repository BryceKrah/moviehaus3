'use strict'
const React = require('react');

const AllMovies = React.createClass( {

  componentDidMount : function () {
    //get data from DB on render
    $.get('/theaters/1/movies')
    .done( (data) => {
      console.log(data)
      //this will likely need to be re-written
      let allMovies = {};
      data.forEach( (el) => {
        var movie_id = el.id;
        allMovies[movie_id] = el;
      })
      console.log('this is the result came from allMovies', allMovies , allMovies[8])    })
  },
    render: function() {
    return (
      <div className="row">
          <section className="col s12">
            {/*to do unfinished tasks*/}
            <div className="carousel carousel-slider">
              <a className="carousel-item" href="#one!"> {this.allMovies} </a>
            </div>
          </section>
      </div>

)
}
})


module.exports = AllMovies;
