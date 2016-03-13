const React = require('react');


const MovieView = React.createClass( {

//need to pass button info to allow for flexibility. pass each button as subComponent1=
  render : function () {

    return (
    <div>

      <ul className = "movieInfoList">
        <li>
          {this.props.poster}
        </li>
        <li>
          {this.props.title}
        </li>
        <li>
          {this.props.year}
        </li>
        <li>
          {this.props.rating}
        </li>
        <li>
          {this.props.director}
        </li>
        <li>
          {this.props.actors}
        </li>
        <li>
          {this.props.plot}
        </li>

      </ul>

      {this.props.button1}
      {this.props.button2}

    </div>
  )
  }

})


module.exports = MovieView;
