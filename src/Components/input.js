import React, { Component } from "react";

class Input extends Component{
    constructor(args){
        super(args);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    state = {
        input: ''
    }
    onChange(e){
        this.setState({input: e.target.value});
    }
    onSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state.input);    
    }
    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input name="input" onChange={this.onChange}></input>
                    <button name="submit" onClick={this.onSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Input;