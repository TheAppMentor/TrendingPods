import ReactDOM from "react-dom";
//import Button from "@material-ui/core/Button";
import React from "react";
import { Button } from "semantic-ui-react";
import { Card, Icon, Image, Grid, Header } from "semantic-ui-react";
import { Component } from "react";

const ButtonExampleEmphasis = () => (
  <div>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
  </div>
);

class CardTitle extends React.Component {
  render() {
    return (
      <div>
        <Icon name="home" size="small" />
        <Header>Top Ranked Pods</Header>
      </div>
    );
  }
}

class PodRankingCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Grid columns={1}>
            <Grid.Row>
              <p>Total 3950000 Pods</p>
            </Grid.Row>
            <Grid.Row>
              <CardTitle />
            </Grid.Row>
            <Grid.Row>
              <Image src="https://uploads.codesandbox.io/uploads/user/54d4fe9a-c0d7-4417-bcfd-a9fafcafadb7/sZBN-matthew.png" />
            </Grid.Row>
            <Card.Header>Matthew</Card.Header>
            <Card.Meta>
              <span className="date">Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}

const CardExampleCard = () => (
  <Card>
    <Image src="https://uploads.codesandbox.io/uploads/user/54d4fe9a-c0d7-4417-bcfd-a9fafcafadb7/sZBN-matthew.png" />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default { CardExampleCard, ButtonExampleEmphasis };

function App() {
  return (
    <div>
      <PodRankingCard />
      <CardExampleCard />
      <ButtonExampleEmphasis />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
