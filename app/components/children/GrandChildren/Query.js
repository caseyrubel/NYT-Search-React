var React = require('react');

class Query extends React.Component {
    render() {
        return(
            <div className="query text-center">
                <form>
                    <input
                        type="text"
                        id="term"
                        className="form-control"
                        placeholder="Search Term"
                        required
                    />
                    <input
                        type="number"
                        id="begin"
                        className="form-control"
                        placeholder="Begin Year"
                    />
                    <input
                        id="end"
                        className="form-control"
                        placeholder="End Year"
                        type="number"
                    />
                    <button type="submit" className="search-button btn btn-info center-block">Search</button>
                </form>
            </div> 
        );
    }
};

module.exports = Query;