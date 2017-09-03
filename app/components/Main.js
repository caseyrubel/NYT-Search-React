import React from "react";

var Header = require('./Header');
var Footer = require('./Footer');
var Search = require('./children/Search');

class Main extends React.Component {
    render() {
        return (
            <div>
                <div className="body">
                    <Header />
                    <div className="row">
                        <Search />
                    </div>
                </div>
                <Footer />
            </div>

        )
    }
};

export default Main;