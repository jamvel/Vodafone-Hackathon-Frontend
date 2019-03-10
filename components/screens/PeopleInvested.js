import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Drawer} from "native-base";
import Sidebar from '../Sidebar';
import Card from '../Card';
import { Actions } from 'react-native-router-flux';

const needs = [
  {"nId":3, "reqId":1, "target":20, "current":20, "reason": "Pay first 2 months rent","how":"I am homeless and require your help to secure an apartment where I can clean myself up and get a job", "startDate":"2019-02-25", "endDate":"2019-04-26", "hide":true},
];

const requests = [
  {"nId":1, "reqId":4, "target":5, "current":5, "reason": "Rent a flat to get off the streets","how":"Due to a domestic accident I lost my house and all of my possessions. I have been homeless for the past 2 months and wish to reintegrate myself within the community", "startDate":"2017-02-25", "endDate":"2019-04-27", "hide":false},
];

export default class PeopleInvested extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

    this.openDrawer = this.openDrawer.bind(this);
    this.goRequestDet = this.goRequestDet.bind(this);
  }

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

    goRequestDet = (ngoID) => {
      Actions.Project({id:ngoID});
    }

  render() {
    const Cards = [];
    for(let i = 0; i < 1; i++){
      Cards.push(
        <Card
          key={i}
          id={7}
          title={needs[i].reason}
          text={needs[i].how}
          date={needs[i].startDate}
          current={needs[i].current}
          target={needs[i].target}
          doAction={this.goRequestDet}
        />
      ),
      Cards.push(
        <Card
          key={i+1}
          id={10}
          title={requests[i].reason}
          text={requests[i].how}
          date={requests[i].startDate}
          current={needs[i].current}
          target={needs[i].target}
          doAction={this.goRequestDet}
        />
      )
    }

    return (
      <Container>
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()} >
          <Header
            openDrawer={this.openDrawer}
            title="My Contributions"
          />
          <Content>
            {Cards}
          </Content>
        </Drawer>
      </Container>
    );
  }
}
