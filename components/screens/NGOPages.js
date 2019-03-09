import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Drawer} from "native-base";
import Sidebar from '../Sidebar';
import Card from '../Card';
import { Actions } from 'react-native-router-flux';

const data = [{"id":1, "name":"Caritas", "website":"https://www.caritasmalta.org/" ,"address":"Caritas Malta, 5, Lion Street, Floriana, FRN1514", "contact":25906600, "email":"info@caritasmalta.org","category":["Reformation", "Drug Addiction"], "img":"CARITAS.png"},
{"id":2, "name":"Make a Wish Foundation", "website":"https://www.worldwish.org/en" , "address":"Make-A-Wish International 1702 E Highland Ave, Suite 305 Phoenix, Arizona 85016 USA", "contact":"1 602.230.9900", "email":"international@worldwish.org","category":["Children", "Illness"], "img":"MAW.png"},
{"id":3, "name":"Richmond Foundation", "website":"https://www.caritasmalta.org/" , "address":"424, St. Joseph High Road, St. Venera, SVR 1013", "contact":21224580, "email":"info@richmond.org.mt","category":["Mental Health"], "img":"Richmond.png"},
{"id":4, "name":"St. Jeanne Antide Foundation", "website":"https://www.antidemalta.org/" , "address":"51, Tarxien Road, Tarxien TXN 1090", "contact":21809011, "email":"macen.sjaf@gmail.com","category":["Domestic Violence", "Social Work", "Mental Health"], "img":"SJA.png"},
{"id":5, "name":"SOS Malta", "website":"http://www.sosmalta.org/" , "address":"10, Triq il-Ward, Santa Venera, SVR 1640", "contact":21244123, "email":"info@sosmalta.org ","category":["Solidarity"], "img":"SOS.png"}];

export default class NGOPages extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

    this.openDrawer = this.openDrawer.bind(this);
    this.goNgoProfile = this.goNgoProfile.bind(this);
  }

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

    goNgoProfile = (ngoID) => {
      Actions.NGOProfile({id:ngoID});
    }

  render() {
    const Cards = [];
    for(let i = 0; i < data.length; i++){
      var category = "";
      data[i].category.forEach(function(cat){(category == "")? category = cat : category = category + " || " + cat;});
      Cards.push(
        <Card
          key={i}
          id={i}
          title={data[i].name}
          date={category}
          text={data[i].address}
          doAction={this.goNgoProfile}
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
