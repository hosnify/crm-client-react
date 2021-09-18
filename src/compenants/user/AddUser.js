import React, { Component, useState } from "react";
import { Form } from "semantic-ui-react";

const options = [
  { key: 0, text: "Admin", value: "ADMIN" },
  { key: 1, text: "Staff", value: "STAFF" },
];

const AddUser = () => {
  const [values, setValues] = useState({});

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  return (
    <Form>
      <Form.Group widths="equal">
        <Form.Input
          fluid
          onChange={handleChange}
          name="firstName"
          label="First name"
          placeholder="First name"
        />
        <Form.Input
          fluid
          onChange={handleChange}
          label="Last name"
          name="lastName"
          placeholder="Last name"
        />
        <Form.Input
          fluid
          onChange={handleChange}
          label="Email"
          name="email"
          placeholder="Email"
        />
        <Form.Input
          fluid
          onChange={handleChange}
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
        />
        <Form.Select
          fluid
          label="Role"
          name="role"
          options={options}
          placeholder="role"
        />
      </Form.Group>
      <Form.Button>Submit</Form.Button>
    </Form>
  );
};

export default AddUser;
