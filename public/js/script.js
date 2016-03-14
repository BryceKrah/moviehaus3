'use strict'
const React = require('react');
const ReactDOM = require('react-dom');

const SearchOMDB = require('./searchomdb.js')
const SearchResult = require('./searchresult.js')

const Nav = require('./nav.js');
const AllMovies = require('./allMovies.js');
const Footer = require('./footer.js');

// const $ = require('jquery');

//components
const MovieView = require('./movieView.js');
// const MyButton = require('./placeholderButton.js');

//end of components

const App = React.createClass( {
  getInitialState : function () {
    return (
      {
        movieSearch : {},
        searching: false,
        allmovies: {}
      }
    )
  },
  componentDidMount : function () {
    //get data from DB on render
    $.get('/theaters/1/movies')
    .done( (data) => {
      console.log(data)
      //this gets everything from the database
      data.forEach( (el) => {
        var movie_id = el.id;
        this.state.allmovies[movie_id] = el;
      })
        // this line changes/refreshes the state of all movies.
        this.setState( {allmovies : this.state.allmovies})
      })
    },


  addTheater : function (newTheater) {
    //i'm not entirely confident in this bit of code.
    var passTheater = this.state.testObj;
    var addNew = (data) => {
      var newID = this.state.testObj;
      this.state.testObj[newID] = data; //adds new theater to textObj
      this.setState( { testObj : this.state.testObj })
    }
    $.post('/OTHERrouteHERE', this.state.testObj)
      .done(
        addNew
      )
  },

  // addTheater : function (newTheater) {
  //   //i'm not entirely confident in this bit of code.
  //   var passTheater = this.state.testObj;
  //   var addNew = (data) => {
  //     var newID = this.state.testObj;
  //     this.state.testObj[newID] = data; //adds new theater to textObj
  //     this.setState( { testObj : this.state.testObj })
  //   }
  //   $.post('/OTHERrouteHERE', this.state.testObj)
  //     .done(
  //       addNew
  //     )
  // },

  searchForMovie: function(title){

    $.get('http://www.omdbapi.com/?t='+title)
    .done((data)=>{
      this.state.movieSearch = data;
      this.setState({movieSearch: this.state.movieSearch,
                      searching: true})
      console.log(this.state.movieSearch)
    })

},

  cancelSearch: function(){
  this.setState({searching: false})
},

  addMovie: function( newMovie ){
    $.post('/theaters/1/movies', newMovie)
    .done((data)=>{
      console.log(data)
    })
  },
  renderMovies:function(key){
  return (
    <AllMovies key = {key} index = {key}   details={this.state.allmovies[key] } />

  )},
  render : function () {
    console.log('this is comming from render function', this.props.details )
    //set any vars/operations we may need for render
    let searchResultView =  <div>
        <SearchOMDB searchMovie={this.searchForMovie} />
        <SearchResult movieSearch={this.state.movieSearch} cancelSearch={this.cancelSearch} addMovie={this.addMovie}/>
        </div>
    let homeView =  <div>
            <SearchOMDB searchMovie={this.searchForMovie} />
            </div>
    return (

      <div>
      <Nav />

      {this.state.searching ? searchResultView : homeView}

      {Object.keys(this.state.allmovies).map( this.renderMovies)}

      <Footer />



      </div>
    )
  }
})



ReactDOM.render( <App />, document.querySelector('.container') );
