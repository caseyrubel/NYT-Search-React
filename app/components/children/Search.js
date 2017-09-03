var React = require('react');
var Query = require('./GrandChildren/Query')

class Search extends React.Component {
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <h4 className="text-center">Search</h4>
                    <Query />
                </div>
            </div>
                
        );
    }
};

module.exports = Search;