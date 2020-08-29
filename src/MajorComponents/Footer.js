import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { AiOutlineInbox, AiOutlinePhone } from "react-icons/ai";

export default class Footer extends Component {
  render() {
    return (
      <Card
        className="mt-5 p-4 text-white"
        style={{ backgroundColor: "#619EF7" }}
      >
        <Card.Body>
          <Card.Text>
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <p>
                    <strong>Contact Us.</strong>
                  </p>
                  <p>
                    {" "}
                    Send An Email.Call Us,What You Want,We'll Be Waiting For
                    You.
                  </p>
                </div>
                <div className=" col-lg-4">
                  <p>
                    <AiOutlineInbox className="mr-2" />
                    madhumithaa@gmail.com
                  </p>
                  <p>
                    <AiOutlinePhone className="mr-2" />
                    +91 928675320
                  </p>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
