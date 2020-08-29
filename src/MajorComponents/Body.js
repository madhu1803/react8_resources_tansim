import React, { Component } from "react";
import Hcard from "../Components/Hcard";
import axios from "axios";
export default class Body extends Component {
  state = {
    data: [
      { title: "hello", description: "hi" },
      { title: "second", description: "second2" },
    ],
  };
  componentDidMount() {
    axios
      .get("https://run.mocky.io/v3/0da87c76-9088-45f3-82b1-a9df5d1077d9")
      .then((response) => {
        this.setState({
          ...this.state,
          data: response.data,
        });
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  }

  render() {
    return (
      <div class="container">
        <h5 className="text-muted mb-3">Resources</h5>
        <div className="row">
          {this.state.data.map((data) => {
            return (
              <div className="col-lg-6">
                <Hcard
                  title={data.title}
                  description={data.description}
                  shadow={true}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
