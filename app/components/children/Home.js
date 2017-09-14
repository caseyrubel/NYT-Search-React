import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Search from "./Search";
import Saved from "./Saved";

export default class Home extends Component {
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-body text-center">
                    <h4>Instructions:</h4>
                    <h5>This app is a New York Times Article Search. Simply fill out the top box with a search term of interest and use the next two boxes to indicate the time frame. You can save articles from the results and view them in the saved articles section. Hit the search button below to get started.</h5>
                    <Link to="/search">Search</Link>
                </div>
            </div>                
        );
    }
};
