var React = require('react');

class Footer extends React.Component {
    render() {
        return(
            <footer>
                <div className="container">
                    <h5>
                        Created by <a href="https://github.com/caseyrubel">Casey Rubel</a>.
                    </h5>
                </div>
            </footer>  
        );
    }
};

module.exports = Footer;