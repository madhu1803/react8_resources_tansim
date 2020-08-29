import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineInbox, AiOutlinePhone, AiFillHome } from "react-icons/ai";

export default class Header extends Component {
  render() {
    return (
      <Card
        className="mb-5 p-4 text-white"
        style={{ backgroundColor: "#619EF7" }}
      >
        <Card.Body>
          <Card.Text>
            <div className="container">
              <h1>Resources List</h1>
              <p>
                {" "}
                Send An Email.Call Us,What You Want,We'll Be Waiting For You.
              </p>

              <p className="mt-5">
                {" "}
                <AiFillHome className="pb-1" /> Dashboard | Resources List
              </p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
