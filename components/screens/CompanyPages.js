import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Drawer} from "native-base";
import Sidebar from '../Sidebar';
import Card from '../Card';
import { Actions } from 'react-native-router-flux';

export default class NGOPages extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

    this.openDrawer = this.openDrawer.bind(this);
    this.goCompanyProfile = this.goCompanyProfile.bind(this);
  }

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

    goCompanyProfile = (companyID) => {
      Actions.CompanyProfile({id:companyID});
    }

  render() {
    const Cards = [];
    const joinedDate = new Date();
    for(let i = 0; i < 5; i++){
      Cards.push(
        <Card
          key={i}
          id={i}
          title={"Company " + i}
          date={"Joined: " + joinedDate.getDay().toString()+"/"+joinedDate.getMonth().toString()+ "/"+ joinedDate.getFullYear().toString()}
          text={"This is a test test"}
          doAction={this.goCompanyProfile}
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
