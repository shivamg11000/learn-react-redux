import React, { Component } from 'react';

const divStyle = {
    display: "flex",
    width:200,
    borderBottom: "1px solid #eee",
}
const spanStyle = {
    paddingTop: 10,
    marginLeft:"auto",
    cursor: "pointer",
}

class Todo extends Component {
    render() {
        const todoClick = this.props.todoClick
        const remove = this.props.remove
        const completed = this.props.completed
        return (
            <div style={divStyle}>
              <p
                onClick={todoClick}
                style={{textDecoration: completed?'line-through':'none', margin: 10}}
              >{this.props.text}</p>
              <span style={spanStyle} onClick={remove}>X</span>    
            </div>
        );
    }
}

export default Todo;