const React = require('react');


const MovieView = React.createClass( {

//need to pass button info to allow for flexibility. pass each button as subComponent1=

  editMovie : function (newInfo) {
    $.ajax({
      method: 'PUT',
      url: '/:movieID',
      //do we need to put an href or action on the button to specify this URL?
      data: newInfo, //new info should be the movie info grabbed from the page that we are editing? do we have an edit component? what is going onnnnnnn
      //where do i specify db.editMovie ?
    })
      .done( (data) => {
        console.log('editMovie .done in movieView was called');
        //i'm 99.99% sure i need to do something here, but brain is out of juice.
      })
      .fail( (error) => {
        console.log(error, 'editMovie in movieView had that error');
      })
  }, //end of editMovie
  deleteMovie : function () {
    $.ajax({
      method: 'DELETE',
      url: '/:movieID',
      //how are we calling db.deleteMovie on this req.params.movieID
    })
      .done( (data) => {
        console.log('deleteMovie .done in movieView was called');
        //i'm 99.99% sure i need to do something here, but brain is out of juice.
      })
      .fail( (error) => {
        console.log(error, 'deleteMovie in movieView had that error');
      })
  }, //end of deleteMovie
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
