import React, { Component } from 'react';
import helpers from "../../../utils/helpers";

class Query extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term: "",
          startYr: "",
          endYr: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleChange(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
      }
      handleSubmit(event) {
        event.preventDefault();
        this.props.runQuery(this.state.term, this.state.startYr, this.state.endYr);
      }
    render() {
        return(
            <div className="query text-center">
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Search Term"
                        className="form-control"
                        id="term"
                        ref="term"
                        type="text"
                        value={this.state.term}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        placeholder="Begin Year"
                        className="form-control"
                        id="startYr"
                        ref="startYr"
                        type="number"
                        min="1970"
                        max="2017"
                        step="1"
                        value={this.state.startYr}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        placeholder="End Year"
                        className="form-control"
                        id="endYr"
                        ref="endYr"
                        type="number"
                        min="1970"
                        max="2017"
                        step="1"
                        value={this.state.endYr}
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit" className="search-button btn btn-info center-block">Search</button>
                </form>
            </div> 
        );
    }
};

export default Query;