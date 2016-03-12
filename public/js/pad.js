addMovie : function (newMovie) {
  //i'm not entirely confident in this bit of code.
  var passMovie = this.state.testObj.movie;//need to figure out what we want in state, and at what level. this is almost certainly incorrect.
  var addNew = (data) => {
    var newID = this.state.testObj.movie;
    this.state.testObj.movie[newID] = data; //adds new Movie to textObj
    // this.setState( { testObj : this.state.testObj }) //this entirely depends on state, so this won't work as is.
  }
  $.post('/OTHERrouteHERE', this.state.testObj.movie)
    .done(
      addNew
    )
},
})
