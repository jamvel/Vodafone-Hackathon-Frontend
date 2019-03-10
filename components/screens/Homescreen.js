import React from "react";
import Header from "../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Drawer} from "native-base";
import Sidebar from '../Sidebar';
import Card from '../Card';
import { Actions } from 'react-native-router-flux';
import Modal from "react-native-modal";
import { View, TextInput, Dimensions, TouchableOpacity} from 'react-native';
import { CheckBox } from 'react-native-elements'

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
    if(this.props.id == undefined){
      this.state = {
        isModalVisible: false,
        checkedCar: true,
        checkedMaw: true,
        checkedRf:true,
        checkedJs:true,
        checkedSo:true
     }

   }else{
     console.log(this.props.id);
      this.state = {
        isModalVisible: false,
        checkedCar: (this.props.id == 1)? true : false,
        checkedMaw: (this.props.id == 2)? true : false,
        checkedRf:(this.props.id == 3)? true : false,
        checkedJs:(this.props.id == 4)? true : false,
        checkedSo:(this.props.id == 5)? true : false
     }
  }

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
      if(reqID % 2 == 0){
        if(reqID == 0){
          Actions.Project({id:reqID, target:needs[reqID].target, current:needs[reqID].current});
        }else{
          var newReqId = reqID/2;
          Actions.Project({id:newReqId, target:needs[newReqId].target, current:needs[newReqId].current});
        }
      }else{
        var newReqId = reqID-1;
        if(reqID == 0){
          Actions.Project({id:reqID, target:requests[reqID].target, current:requests[reqID].current});
        }else{
          newReqId = newReqId/2;
          Actions.Project({id:newReqId, target:requests[newReqId].target, current:requests[newReqId].current});
        }
      }
    }

    _toggleModal = () =>
       this.setState({ isModalVisible: !this.state.isModalVisible });

    _resetForm = () =>
      {
        this.setState({ isModalVisible: false })
        this.setState({ checkedCar: true })
        this.setState({ checkedMaw: true })
        this.setState({ checkedRf: true })
        this.setState({ checkedJs: true })
        this.setState({ checkedSo: true })
      };

  render() {
    const Cards = [];
    for(let i = 0; i < requests.length; i++){
      var pushTo = false;
      switch (i) {
        case 0:
          if(this.state.checkedJs){
            pushTo = true;
          }
          break;
        case 1:
          if(this.state.checkedRf){
            pushTo = true;
          }
          break;
        case 2:
          if(this.state.checkedCar){
            pushTo = true;
          }
          break;
        case 4:
          if(this.state.checkedSo){
            pushTo = true;
          }
          break;
        case 5:
        if(this.state.checkedMaw){
          pushTo = true;
        }
        break;
        default:

      }
      if(pushTo){
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
          <Modal
            animationType="slide"
            transparent={false}
            isVisible={this.state.isModalVisible}>
            <View style={{marginTop: 22, alignItems: 'center', padding:30}}>
                <Text style={{color: '#FFFFFF', marginTop: 10, textAlign: 'center', fontSize: 25, fontWeight: '700'}}>Filter By:</Text>
                <CheckBox title='Caritas' checked={this.state.checkedCar} onPress={() => this.setState({checkedCar: !this.state.checkedCar})}/>
                <CheckBox title='Make a Wish Foundation' checked={this.state.checkedMaw} onPress={() => this.setState({checkedMaw: !this.state.checkedMaw})}/>
                <CheckBox title='Richmond Foundation' checked={this.state.checkedRf} onPress={() => this.setState({checkedRf: !this.state.checkedRf})}/>
                <CheckBox title='St. Jeanne Antide Foundation' checked={this.state.checkedJs} onPress={() => this.setState({checkedJs: !this.state.checkedJs})}/>
                <CheckBox title='SOS Malta' checked={this.state.checkedSo} onPress={() => this.setState({checkedSo: !this.state.checkedSo})}/>
                <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModal}><Text> Submit </Text></Button>
                <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._resetForm}><Text> Reset </Text></Button>
            </View>
          </Modal>
          <Content>
            {Cards}
          </Content>
        </Drawer>

        <Button primary block style={{margin:10,borderRadius:10,height:50}} onPress={this._toggleModal}><Text> Filter </Text></Button>
      </Container>
    );
  }
}

CardComponent.defaultProps = {
  title:"Card Title",
  date:"--",
  text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  doAction:()=>{}
}
