import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions/todoActions';

class AddTodo extends Component {
    render() {
        return (
            <div>
              <input type="text" ref={node => this.myInput=node}/>
              <button
                onClick={() => {
                    this.props.dispatch(addTodo(this.myInput.value))
                    this.myInput.value = ""
                }}
              >Add</button>  
            </div>
        );
    }
}

//container component but it is not connected to the store's state,
// only dispatch function is passed as props here
AddTodo = connect()(AddTodo); 

export default AddTodo;