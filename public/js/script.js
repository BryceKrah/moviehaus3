'use strict'
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');

const App = React.createClass( {
  getInitialState : function () {
    return {
      testObj : {}
    }
  },
  componentDidMount : function () {
    //get data from DB on render
    $.get('/ROUTEgoesHERE')
      .done( (data) => {
        //this will likely need to be re-written
        data.forEach( (el) => {
          this.state.testObj[el.KEY_ID] = el;
        })
        // console.log(Object.keys.this.state.testObj);
        this.setState( {testObj : this.state.testObj})
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
  //addMovie : copy from pad to here once we decide on nomenclature
  //deleteTheater : //code
  //deleteMovie : //code
  render : function () {
    //set any vars/operations we may need for render

    return (
      <div {/* App div inside container div, kind of redundant */} >
        //the closing make more sense to the linter once we assign each component to a prop, but the linter can't read this well as is
        <AllTheatersDisplay
          {/* various props */}

          <OneTheaterDisplay
            {/* props, including one to indicate which theater this is*/}
            <MovieList
              {/* props */}
              <OneMovieDisplay
                {/* props, including one to indicate which movie this is. title? playing times?*/}
                /> {/* OneMovieDisplay close */}
              /> {/* MovieList close */}
            /> {/* OneTheaterDisplay close */}
          /> {/* AllTheatersDisplay close */}
          <CurrentMovieDisplay
            {/* various props. poster, title, year, rating, director, plot (PTYRDP) might be condensible to a single element/prop */}
            <PTYRDP
              />
            <ActorArrayOrList
              />
            <MagicButton type="edit"
              /> //this type may need to take another form
            <MagicButton type="delete"
              /> //this type may need to take another form
            />
          <SearchArea
            {/* props */}
            <FormContainer
              <TextInput
                />
              <SubmitButton
                />
              />
            <ResultField
              {/* props */}
              <PTYP
                />
              <MagicButton type="submit"
                /> //this type may need to take another form
              />
            />
      </div>
    )
  }
})


ReactDOM.render( <App />, document.querySelector('#container') );
