import PropTypes from "prop-types";
import React from "react";
import {
  Button,
  Container,
  Menu,
  Segment,
  Visibility,
} from "semantic-ui-react";

const AppBar = () => {
  return (
    <Visibility once={false}>
      <Segment
        textAlign="center"
        style={{ minHeight: 100, padding: "1em 0em" }}
        vertical
      >
        <Menu fixed={"top"} pointing secondary size="large">
          <Container>
            <Menu.Item as="a" active>
              Home
            </Menu.Item>
            <Menu.Item as="a">Work</Menu.Item>
            <Menu.Item as="a">Company</Menu.Item>
            <Menu.Item as="a">Careers</Menu.Item>
            <Menu.Item position="right">
              <Button as="a">Log in</Button>
              <Button as="a" inverted secondary style={{ marginLeft: "0.5em" }}>
                Sign Up
              </Button>
            </Menu.Item>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  );
};

AppBar.propTypes = {
  children: PropTypes.node,
};

export default AppBar;
