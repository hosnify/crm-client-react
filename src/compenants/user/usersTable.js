import React from "react";
import { Table, Button, Icon, Checkbox } from "semantic-ui-react";

const UsersTable = () => {
  const usersTableMetaData = [
    "name",
    "Created at",
    "E-mail address",
    "Role",
    "Action",
  ];

  const users = [
    {
      id: 123,
      firstName: "ahmed",
      lastName: "sameh",
      email: "ahmed@gmail.com",
      role: "admin",
      createdAt: "date here",
    },
  ];
  return (
    <Table singleLine>
      <Table.Header>
        <Table.Row>
          {usersTableMetaData.map((metadata) => (
            <Table.HeaderCell key={metadata}>{metadata}</Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {users.map((userData) => (
          <Table.Row key={userData.id}>
            <Table.Cell>{`${userData.firstName} ${userData.lastName}`}</Table.Cell>
            <Table.Cell>{userData.createdAt}</Table.Cell>
            <Table.Cell>{userData.email}</Table.Cell>
            <Table.Cell>{userData.role}</Table.Cell>
            <Table.Cell>
              <Button icon labelPosition="right" primary size="small">
                <Icon name="user" /> show User
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default UsersTable;
