import axios from "axios";
import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [id, setId] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://6260945592df0bc0f345caea.mockapi.io/api/${id}`, {
        firstName,
        lastName,
      })
      .then(() => navigate("/read"));
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("FirstName"));
    setLastName(localStorage.getItem("LastName"));
    setId(localStorage.getItem("ID"));
  }, []);

  return (
    <Form style={{ marginBottom: "2rem" }} onSubmit={(e) => handleSubmit(e)}>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        onChange={(e) => setFirstName(e.target.value)}
      >
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name="fname" value={firstName} />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        onChange={(e) => setLastName(e.target.value)}
        value={lastName}
      >
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name="lname" value={lastName} />
      </Form.Group>

      <Button variant="warning" type="submit">
        Update
      </Button>
    </Form>
  );
}
