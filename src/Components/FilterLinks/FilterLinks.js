import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions/todoActions';

const FilterLink = ({children,dispatch,filter}) =>  (
    <span>
        <a 
          href="" 
          onClick={e =>
            { e.preventDefault()
              dispatch(setVisibilityFilter(filter))
            }}
        >{children}</a>
    </span>
);
    

class FilterLinks extends Component {
    render() {
        const dispatch = this.props.dispatch
        return (
            <div>
                Show:
                {" "}
                <FilterLink filter={"SHOW_ALL"} dispatch={dispatch}>ALL</FilterLink>
                {" "}
                <FilterLink filter={"SHOW_ACTIVE"} dispatch={dispatch}>Active</FilterLink>
                {" "}
                <FilterLink filter={"SHOW_COMPLETED"} dispatch={dispatch}>Completed</FilterLink>
            </div>
        );
    }
}

FilterLinks = connect()(FilterLinks);


export default FilterLinks;