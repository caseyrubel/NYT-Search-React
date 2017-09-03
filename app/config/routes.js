//require react elements
var React = require('react');
var router = require('react-router');

// require components
var Main = require('../components/Main');
// var Search = require('./components/children/Search');
// var Saved = require('./components/children/Saved');
// var Panels = require('./components/children/Panels');

// for individual routes
var Route = router.Route;

// contains routes and can handle hashhistory
var Router = router.Router;

// handles client side without server
var hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;


// Export the Routes
module.exports = (

    // The high level component is the Router component
    <Router history={hashHistory}>
        <Route path="/" component={Main}>

            <Route path="search" component={Search} />
            <Route path="saved" component={Saved} />

            {/* Show search by default */}
            <IndexRoute component={Panels} />
        </Route>
    </Router>

);