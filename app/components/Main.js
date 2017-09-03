import React from "react";

var Header = require('./Header');

class Main extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div>
                    {this.props.children}
                </div>
            </div>

        )
    }
};

export default Main;