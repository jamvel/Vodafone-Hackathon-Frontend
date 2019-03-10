import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Drawer} from "native-base";
import Sidebar from '../Sidebar';
import Card from '../Card';
import { Actions } from 'react-native-router-flux';

const needs = [
  {"nId":1, "ngoId":4, "target":5, "current":2, "reason": "Social Workers","how":"Due to several unforseen expenses we have fallen behind in paying wages and consequently we don't have any social workers and need individuals to help out", "startDate":"2019-02-24", "endDate":"2019-04-27"},
  {"nId":2, "ngoId":3, "target":600, "current":200, "reason": "Driver for our new van","how":"Our NGO is in desperate need of a new driver holding a bus driving license", "startDate":"2019-02-25", "endDate":"2020-04-23"},
  {"nId":3, "ngoId":1, "target":200, "current":200, "reason": "We are currently changing premesis and need help moving","how":"We have outgrown our old premesis and need help moving several furnitures, beds and other household items ", "startDate":"2019-02-26", "endDate":"2019-04-26"},
  {"nId":4, "ngoId":5, "target":30, "current":2, "reason": "Get more carers","how":"The demand for carers has increased and we can't pay for them. We require professionals who are willing to donate their time", "startDate":"2019-02-27", "endDate":"2019-04-28"},
  {"nId":5, "ngoId":2, "target":70, "current":20, "reason": "Fix structural damage to building","how":"We need skilled people to carry out refurbishments throughout our premesis", "startDate":"2019-03-10", "endDate":"2019-09-23"}
];

const requests = [
  {"nId":1, "reqId":4, "target":5, "current":2, "reason": "New Wheelchair","how":"For the past two months I have been bedridden due to an unfortunate work place accident and need funds for an electronic Wheelchair", "startDate":"2019-02-25", "endDate":"2019-04-27", "hide":false},
  {"nId":2, "reqId":3, "target":600, "current":200, "reason": "Visit specialist in London","how":"I have a rare disease which requires me to visit a specialist in Britain", "startDate":"2019-02-25", "endDate":"2020-04-23", "hide":false},
  {"nId":3, "reqId":1, "target":20, "current":20, "reason": "Pay first 2 months rent","how":"I am homeless and require your help to secure an apartment where I can clean myself up and get a job", "startDate":"2019-02-25", "endDate":"2019-04-26", "hide":true},
  {"nId":4, "reqId":5, "target":30, "current":2, "reason": "Pay for medicine","how":"I have a rare disease which the government can only help me so much and need your help securing my next term of pills", "startDate":"2019-02-25", "endDate":"2019-04-28", "hide":false},
  {"nId":5, "reqId":2, "target":70, "current":20, "reason": "Pay outstanding debts","how":"I was a gambler and the past won't let me be and need your help to rid me of my past", "startDate":"2019-03-09", "endDate":"2019-06-23", "hide":true}
];

export default class HomeScreen extends React.Component {
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

    goRequestDet = (reqID) => {
      Actions.Project({id:reqID});
    }

  render() {
    const Cards = [];
    for(let i = 0; i < 5; i++){
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
          key={i + 5}
          id={i + 5}
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
