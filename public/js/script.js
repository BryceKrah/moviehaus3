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
    var newID = this.state.testObj;
    this.state.testObj[newID] = data; //adds new theater to textObj
    this.setState( { testObj : this.state.testObj })
  }
})


ReactDOM.render( <App />, document.querySelector('#container') );
