'use strict'
const React = require('react');

const AllMovies = React.createClass( {

    render: function() {
    return (
      <div className="row">
          <section className="col s12">
            {/*to do unfinished tasks*/}
            <p>test</p>
            <section id="todo-display" className="col s12">
            <div className="carousel carousel-slider">
              <a className="carousel-item" href="#one!"><img src={'http://lorempixel.com/800/400/food/1'}/>sss</a>
              <a className="carousel-item" href="#two!"><img src={'http://lorempixel.com/800/400/food/2'}/>sss</a>
              <a className="carousel-item" href="#three!"><img src={'http://lorempixel.com/800/400/food/3'}/>ddd</a>
              <a className="carousel-item" href="#four!"><img src={'http://lorempixel.com/800/400/food/4'}/>fff</a>
            </div>
            </section>
          </section>
      </div>

)
}
})


module.exports = AllMovies;
