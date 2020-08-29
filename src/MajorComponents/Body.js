import React, { Component } from "react";
import Hcard from "../Components/Hcard";
import axios from "axios";
export default class Body extends Component {
  state = {
    data: [],
  };
  render() {
    axios
      .get("https://run.mocky.io/v3/0da87c76-9088-45f3-82b1-a9df5d1077d9")
      .then((response) => {
        alert("success");
        // console.log(response.data);
        console.log(response.data[0].title);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });

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
