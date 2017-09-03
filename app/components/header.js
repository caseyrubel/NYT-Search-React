var React = require('react');

class Header extends React.Component {
    render() {
        return(
            <div className="page-header" role="navigation">
                <div className="container">
                    <ul className="nav navbar-nav navbar-left">
                        <li className="title"><a href="/">React NYTimes</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#/search">Search</a></li>
                        <li><a href="#/saved">Saved</a></li>
                    </ul>
                </div>
            </div>
                
        );
    }
};

module.exports = Header;