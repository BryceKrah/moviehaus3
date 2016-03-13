'use strict'
const React = require('react');

// console.log('button.js ran');

//MUST PASS: name, inputType, buttonLabel when invoked.

const MyButton = React.createClass( {


  render : function () {

    //check refs, etc above this line with console.logs

    return ( 
      <div
        className={`${this.props.name} Container`}
        style = {backgroundColor: 'green'}>
        <input
            type = { this.props.inputType }
            value = { this.props.buttonLabel }
          />

      </div>

    )
  }
})

module.exports = MyButton;
