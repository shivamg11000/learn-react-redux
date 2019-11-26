import React, { Component } from "react";
import filterTypes from "../enums/filterTypes";
const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = filterTypes;

const filter = ({setFilter}) => (
    <div className="filters">
        <span>SHOW : </span>
        <a href="#" onClick={() => setFilter(SHOW_ALL)} >All</a>
        <a href="#" onClick={() => setFilter(SHOW_ACTIVE)} >Active</a>
        <a href="#" onClick={() => setFilter(SHOW_COMPLETED)} >Complete</a>
    </div>
);

export default filter;