import React, { Component } from 'react';
import helpers from "../../utils/helpers";
import moment from "moment";

export default class Saved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderNoSaved = this.renderNoSaved.bind(this);
    this.renderSaved = this.renderSaved.bind(this);
  }
  componentDidMount() {
    helpers.getSaved().then(function(res) {
      // only updates if any saved articles are found
      if (res.data.length > 0) {
        this.setState({ saved: res.data });
      };
    }.bind(this));
  }
  handleClick(article) {
    helpers.deleteSaved(article)
    .then(function() {
      helpers.getSaved().then(function(res) {
        this.setState({ saved: res.data });
      }.bind(this));
    }.bind(this));
    alert("You deleted a Saved Article!");
  }
  renderNoSaved() {
    return (
      <li className="list-group-item">
        <h3 className="text-center"><em>You have no articles saved.</em></h3>
      </li>
    )
  }
  renderSaved() {
    return this.state.saved.map(function(article, index) {
      return (
        <li className="list-group-item" key={index}>
          <h4>
            <button className="btn btn-info pull-right" onClick={() => this.handleClick(article)}>
              Delete
            </button>
            <a href={article.url} rel="noopener noreferrer" target="_blank">
              <em>{article.title}</em>
            </a>
          </h4>
          <p><em>{moment(article.date).format('MMMM D, YYYY')}</em></p>
        </li>
      )
    }.bind(this));
  }
    render() {
        return(
            <div className="panel panel-default">
                <div className="panel-body">
                    <ul className="list-group">
                        {this.state.saved.length === 0 ? this.renderNoSaved() : this.renderSaved()}
                    </ul>
                </div>
            </div>                
        );
    }
};
