import React from "react";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import { AsyncStorage } from 'react-native';
import Drawer from 'react-native-drawer';

export default class AppHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      balance:0
    }
  }

  componentWillMount(){
    AsyncStorage.getItem('balance').then((value) => {
      this.setState({balance:parseInt(value)})
    });
  }

  componentDidUpdate(prevProps){
    if(this.props.balanceFlag !== prevProps.balanceFlag){
      //update value in Header
      AsyncStorage.getItem('balance').then((value) => {
        this.setState({balance:parseInt(value)})
      });
    }
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
         <Right>
            <Icon name='flame' style={{marginRight:5,color:"white",fontSize:16}} />
            <Text style={{color:"white",fontSize:17}}>{this.state.balance}</Text>
          </Right>
       </Header>
    );
  }
}
