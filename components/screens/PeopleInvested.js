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
  {"nId":1, "reqId":4, "target":5, "current":2, "reason": "New Wheelchair","how":"For the past two months I have been bedridden due to an unfortunate work place accident and need funds for an electronic Wheelchair", "startDate":"2019-02-25", "endDate":"2019-04-27", "hide":false},
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
      Actions.NGOProfile({id:ngoID});
    }

  render() {
    const Cards = [];
    for(let i = 0; i < 1; i++){
      Cards.push(
        <Card
          key={i}
          id={i}
          title={needs[i].reason}
          text={needs[i].how}
          date={needs[i].startDate}
          doAction={this.goRequestDet}
        />
      ),
      Cards.push(
        <Card
          key={i+1}
          id={i+1}
          title={requests[i].reason}
          text={requests[i].how}
          date={requests[i].startDate}
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
          />
          <Content>
            {Cards}
          </Content>
        </Drawer>
      </Container>
    );
  }
}
