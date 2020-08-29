import React, { Component } from "react";
import Header from "./MajorComponents/Header";
import Body from "./MajorComponents/Body";
import Footer from "./MajorComponents/Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}
