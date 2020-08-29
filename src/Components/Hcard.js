import React, { Component } from "react";
import "../Components/Hcard.css";
export default class Hcard extends Component {
  render() {
    let { shadow, title, description } = this.props;
    return (
      <div
        className={`card mb-5 card-container ${
          shadow ? "shadow bg-white rounded" : null
        }`}
      >
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
