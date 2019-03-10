import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Drawer} from "native-base";
import Sidebar from '../Sidebar';
import Card from '../Card';
import { Actions } from 'react-native-router-flux';

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
    for(let i = 0; i < 2; i++){
      Cards.push(
        <Card
          key={i}
          id={i}
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
