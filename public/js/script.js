'use strict'
const React = require('react');
const ReactDOM = require('react-dom');

const SearchOMDB = require('./searchomdb.js')
const SearchResult = require('./searchresult.js')

const Nav = require('./nav.js');
const AllMovies = require('./allMovies.js');
const Footer = require('./footer.js');


const App = React.createClass( {
  getInitialState : function () {
    return (
      {
        movieSearch : {},
        searching: false
      }
    )
  },
  componentDidMount : function () {
    //get data from DB on render
    $.get('/theaters/1/movies')
    .done( (data) => {
      console.log(data)
      //this will likely need to be re-written
      data.forEach( (el) => {
        this.state.movieSearch[el.KEY_ID] = el;
      })
      // console.log(Object.keys.this.state.testObj);
      this.setState( {movieSearch : this.state.movieSearch})
    })
  },
  // componentDidMount : function () {
  //   //get data from DB on render
  //   $.get('/ROUTEgoesHERE')
  //     .done( (data) => {
  //       //this will likely need to be re-written
  //       data.forEach( (el) => {
  //         this.state.testObj[el.KEY_ID] = el;
  //       })
  //       // console.log(Object.keys.this.state.testObj);
  //       this.setState( {testObj : this.state.testObj})
  //     })
  // },
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


  render : function () {
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
      <AllMovies />
      {this.state.searching ? searchResultView : homeView}
      <Footer />
      </div>
    )
  }
})



ReactDOM.render( <App />, document.querySelector('.container') );
