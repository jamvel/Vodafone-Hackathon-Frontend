import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Drawer} from "native-base";
import Sidebar from '../Sidebar';
import Card from '../Card';
import { Actions } from 'react-native-router-flux';

const data = [{"id":1, "name":"Vodafone", "address":"Malta International Airport (Arrivals), Ħal Luqa LQA 4000", "contact":99999247, "email":"info@vodafone.com", "employeeHours":200, "startDate":"2018-04-25", "img":"Vodafone.png"},
  {"id":2, "name":"Office of the Prime Minister", "address":"Auberge de Castille", "contact":99999247, "email":"info@opm.com", "employeeHours":50, "startDate":"2018-06-24", "img":"OPM.png"},
  {"id":3, "name":"The Malta Police Force", "address":"The Malta Police Force, Police General Headquarters, Pjazza San Kalcidonju, Floriana FRN 1530", "contact":21224001, "email":"pulizija@gov.mt", "employeeHours":37, "startDate":"2018-02-24", "img":"Police.png"},
  {"id":4, "name":"Civil Protection Department Malta", "address":"Ministry for Home Affairs and National Security, 201, Strait Street, Valletta VLT 1433", "contact":25689000, "email":"homeaffairs@gov.mt", "employeeHours":157, "startDate":"2018-01-10", "img":"CPD.png"},
  {"id":5, "name":"University Of Malta", "address":"University of Malta, Msida MSD 2080, Malta", "contact":23402340, "email":"info@um.edu.mt", "employeeHours":30, "startDate":"2018-03-12", "img":"UOM.png"}];

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
    for(let i = 0; i < data.length; i++){
      Cards.push(
        <Card
          key={i}
          id={i}
          title={data[i].name}
          date={data[i].startDate}
          text={data[i].address}
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
