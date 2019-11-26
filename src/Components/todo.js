
import React, { Component } from "react";


const todos = ({todos, todoClick, todoRemove}) => (
    <div className="todos">
      { 
        todos.map(({id, text, completed}) => 
            <div key={id} className="todo-item">
                <p style={{textDecoration: completed?'line-through':'none'}} onClick={() => todoClick(id)}>
                    {text}
                </p>
                <span onClick={() => todoRemove(id)}>X</span>
            </div>)
      }
    </div>
);

export default todos;