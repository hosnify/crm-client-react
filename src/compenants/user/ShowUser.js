import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const UserCard = () => {
  const user = {
    id: 123,
    firstName: "ahmed",
    lastName: "sameh",
    email: "ahmed@gmail.com",
    role: "admin",
    createdAt: "date here",
  };
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
        />
        <Card.Header>{`${user.firstName} ${user.lastName} `}</Card.Header>
        <Card.Meta>{user.email}</Card.Meta>
        <Card.Meta>{user.role}</Card.Meta>

        <Card.Description>Number of leads : 500</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Edit
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
