import React, { Component } from 'react';
import Query from './GrandChildren/Query';
import Results from './GrandChildren/Results';
import helpers from "../../utils/helpers";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          results: {},
          runQuery: false
        };
        this.runQuery = this.runQuery.bind(this);
      }
      runQuery(newTerm, newStartYr, newEndYr) {
        helpers
          .runQuery(newTerm, newStartYr, newEndYr)
          .then(function(data) {
            this.setState({
              results: { docs: data.docs },
              runQuery: true
            });
          }.bind(this)
        );
      }
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <Query runQuery={this.runQuery} />
                    {this.state.runQuery ? (
                        <Results results={this.state.results} />
                    ) : null}
                </div>
            </div>                
        );
    }
};

export default Search;