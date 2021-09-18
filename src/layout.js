import React from "react";
import { Grid } from "semantic-ui-react";
import SideBar from "./SideBar";

const ContentLayout = ({ children }) => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <SideBar />
      </Grid.Column>
      <Grid.Column width={13}>{children} </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ContentLayout;
