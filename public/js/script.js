'use strict'
const React = require('react');
const ReactDOM = require('react-dom');
// const $ = require('jquery');

//components
const MovieView = require('./movieView');
const MyButton = require('./placeholderButton.js');

//end of components

const App = React.createClass( {
  getInitialState : function () {
    return {
      testObj : {}
    }
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
  //addMovie : copy from pad to here once we decide on nomenclature
  //deleteTheater : //code
  //deleteMovie : //code
  render : function () {
    //set any vars/operations we may need for render

    return (
      <div>

        <MovieView
          poster='posterhtml'
          plot='plot summary'
          button1= {
            <MyButton
              name = "edit"
              inputType = "button"
              buttonLabel = "Edit Movie"
              />
          }
          button2 = {
            <MyButton
              name = "delete"
              inputType = "button"
              buttonLabel = "Delete Movie"
              />
          }

        />


      </div>
    )
  }
})


ReactDOM.render( <App />, document.querySelector('.container') );
