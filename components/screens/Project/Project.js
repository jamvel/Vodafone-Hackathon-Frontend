import React from "react";
import Header from "../../Header.js"
import { Container, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem , Drawer} from "native-base";
import Overlay from 'react-native-modal-overlay';
import AwesomeAlert from 'react-native-awesome-alerts';
import Sidebar from '../../Sidebar';
import ProjectContent from './ProjectContent.js';

export default class Project extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible:false,
      modalTitle:"",
      modalContent:"",
      balanceFlag:false,
    }

    this.openDrawer = this.openDrawer.bind(this);
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.updateOverlayContent = this.updateOverlayContent.bind(this);
    this.updateBalanceFlag = this.updateBalanceFlag.bind(this);
  }

    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };

    toggleOverlay = (show) => {
      this.setState({
        modalVisible: show
      })
    }

    closeOverlay = () => {
      this.setState({
        modalVisible:false
      })
    }

    updateOverlayContent = (title,content) => {
      this.setState({
        modalTitle:title,
        modalContent:content
      })
    }

    updateBalanceFlag= () =>  {
      this.setState({
        balanceFlag:!this.state.balanceFlag
      })
    }

  render() {
    return (
      <Container>
        <Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()} >
          <Header
            openDrawer={this.openDrawer}
            title=""
            balanceFlag={this.state.balanceFlag}
          />

          <Overlay
            visible={this.state.modalVisible}
            onClose={this.closeOverlay}
            animationType="zoomIn"
            containerStyle={{backgroundColor:'rgba(51, 152, 219, 0.2)'}}
            childrenWrapperStyle={{backgroundColor: '#fff',borderRadius:10}}
            animationDuration={400}
            closeOnTouchOutside
          >
              <Text style={{fontWeight:"bold",fontSize:24,marginBottom:10}}>{this.state.modalTitle}</Text>
              <Text>{this.state.modalContent}</Text>
          </Overlay>

          <Content>
            <ProjectContent
              id={this.props.id}
              toggleOverlay={this.toggleOverlay}
              overlayShown={this.state.modalVisible}
              updateOverlayContent={this.updateOverlayContent}
              updateBalanceFlag={this.updateBalanceFlag}
            />
          </Content>

        </Drawer>
      </Container>
    );
  }
}
