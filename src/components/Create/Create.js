import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    axios
      .post("https://6260945592df0bc0f345caea.mockapi.io/api", {
        firstName,
        lastName,
      })
      .then(() => navigate("/read"));
    e.preventDefault();
  };

  return (
    <Form style={{ marginBottom: "2rem" }} onSubmit={(e) => handleSubmit(e)}>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        onChange={(e) => setFirstName(e.target.value)}
      >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="fname" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        onChange={(e) => setLastName(e.target.value)}
      >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lname" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
