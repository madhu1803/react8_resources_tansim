import React, { Component } from "react";
import Hcard from "../Components/Hcard";
import "./Css/Body.css";
export default class Body extends Component {
  render() {
    return (
      <div class="container">
        <h5 className="text-muted mb-3">Resources</h5>
        <div className="row">
          <div className="col-lg-6">
            <Hcard shadow={true} />
            <Hcard />
            <Hcard />
          </div>
          <div className="col-lg-6">
            <Hcard />
            <Hcard />
            <Hcard />
          </div>
        </div>
      </div>
    );
  }
}
