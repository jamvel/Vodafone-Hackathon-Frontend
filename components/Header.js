import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import Drawer from 'react-native-drawer';

export default class AppHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  render() {
    return (
       <Header>
         <Left>
           <Button
             transparent
             onPress={() => this.props.openDrawer()}>
             <Icon name="menu" />
           </Button>
         </Left>
         <Body>
           <Title>{this.props.title}</Title>
         </Body>
       </Header>
    );
  }
}
