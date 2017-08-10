import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const onClick = this.props.onClick
        const completed = this.props.completed
        return (
            <div>
              <p
                onClick={onClick}
                style={{textDecoration: completed?'line-through':'none'}}
              >{this.props.text}</p>    
            </div>
        );
    }
}

export default Todo;