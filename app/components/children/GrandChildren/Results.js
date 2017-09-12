import React, { Component } from "react";
import helpers from "../../../utils/helpers";
import moment from "moment";

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article_id: "",
      title: "",
      url: "",
      pub_date: ""
    }
    this.handleClick = this.handleClick.bind(this);
    this.renderNoArticles = this.renderNoArticles.bind(this);
    this.renderArticles = this.renderArticles.bind(this);
  }
  handleClick(article) {
    helpers.saveArticle(article);
    alert("Keeping this Article");
  }
  renderNoArticles() {
    return (
      <li className="list-group-item">
        <h3 className="text-center"><em>No articles found!</em></h3>
      </li>
    )
  }
  renderArticles() {
    return this.props.results.docs.map(function(article, index) {
      return (
        <li className="list-group-item" key={index}>
          <h4>
            <button className="btn btn-info pull-right" onClick={() => this.handleClick(article)}>
              save
            </button>
            <a href={article.web_url} rel="noopener noreferrer" target="_blank">
              <em>{article.headline.main}</em>
            </a>
          </h4>
          <p><em>{moment(article.pub_date).format('MMMM D, YYYY')}</em></p>
        </li>
      )
    }.bind(this));
  }
  render() {
    return (
      <div id="results text-center" className="row">
          <div className="panel">
            <div className="panel-body">
              <ul className="list-group">
                {this.props.results.docs.length === 0 ? this.renderNoArticles() : this.renderArticles()}
              </ul>
            </div>
          </div>
      </div>
    )
  }
};