import React from 'react';
import {Card, Form, Row, Col} from 'react-bootstrap';
import "./uriBox.css";

const uriBox = (props)=>{

    return (
      <Card text="black" style={{ margin: "10px" }}>
        <div style={{ float: "right" }}>
          <button
            type="button"
            className="close"
            aria-label="Close"
            onClick={() => props.deleteCard(props.boxKey)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Card.Body>
          <Form>
            <Form.Group as={Row} controlId="formHorizontalType">
              <Form.Label column sm={2}>
                Type
              </Form.Label>
              <Col sm={4}>
                <select
                  value={props.Values.Type || ""}
                  placeholder="Type"
                  onChange={event => props.changeType(event, props.boxKey)}
                >
                  <option name="">Select</option>
                  <option name="1">1</option>
                  <option name="2">2</option>
                  <option name="3">3</option>
                  <option name="4">4</option>
                </select>
              </Col>

              <Form.Label column sm={2}>
                Title
              </Form.Label>
              <Col sm={4}>
                <Form.Control
                  value={props.Values.Title || ""}
                  type="Title"
                  placeholder="Title"
                  onChange={event => props.changeTitle(event, props.boxKey)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} controlId="formHorizontalURL">
              <Form.Label column sm={2}>
                URL
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  placeholder="URL"
                  value={props.Values.URL || ""}
                  onChange={event => props.changeURL(event, props.boxKey)}
                />
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
}

export default uriBox;