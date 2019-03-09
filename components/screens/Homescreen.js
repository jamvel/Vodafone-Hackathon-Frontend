import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem , Drawer} from "native-base";
import Sidebar from '../Sidebar';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

    this.openDrawer = this.openDrawer.bind(this);
  }

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

  render() {
    const Cards = [];
    for(let i = 0; i < 5; i++){
      Cards.push(
        <Card key={i} style={{marginTop:5,height:250}}>
          <CardItem header bordered>
            <Body>
              <Text>
                 Card Title {i}
              </Text>
            </Body>
            <Text style={{fontSize:12}}>dd/mm/yy hh:mm</Text>
          </CardItem>
        </Card>
      );
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
