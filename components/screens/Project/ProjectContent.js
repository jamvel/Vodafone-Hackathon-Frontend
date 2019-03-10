import React from "react";
import { Container, Grid, Text, Card, CardItem, Content, Body, Icon, Button} from "native-base";
import { View, ScrollView } from "react-native";
import Timeline from 'react-native-timeline-listview';
import NumericInput from 'react-native-numeric-input';
import PropTypes from 'prop-types';

export default ProjectContent = (props) => (
  <ScrollView>
    <Content>
      <Card>
        <CardItem header bordered>
          <Text style={{fontSize:24}}>Description</Text>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text>
              NativeBase is a free and open source framework that enable
              developers to build
              high-quality mobile apps using React Native iOS and Android
              apps
              with a fusion of ES6.
            </Text>
          </Body>
        </CardItem>
      </Card>
      <Text style={{fontSize:32,fontWeight:"bold",marginLeft:10,marginTop:10}}>My Story <Icon name='book' style={{marginRight:7,color:"#3498db",fontSize:36}}/></Text>
        <Timeline
          data={props.data}
          circleSize={30}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          titleStyle={{fontSize:24}}
          descriptionStyle={{color:'gray',paddingVertical:5}}
          options={{
            style:{paddingTop:5}
          }}
          showTime={false}
          style={{marginLeft:8,marginTop:20}}
          seperator={true}
          seperatorStyle={{color:"gray"}}
          onEventPress={(event)=>{
            console.log(event);
            if(!props.overlayShown){
              props.updateOverlayContent(event.title,event.extraInfo);
              props.toggleOverlay(true);
            }
          }}
        />

      <Card style={{marginTop:15}}>
        <CardItem header>
          <Text style={{fontSize:32,textAlign:"center",fontWeight:"bold"}}>Donate <Icon name='flame' style={{marginRight:5,color:"#3498db",fontSize:34}}/></Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              WhyDonate..
              NativeBase is a free and open source framework that enable
              developers to build
              high-quality mobile apps using React Native iOS and Android
              apps
              with a fusion of ES6.
            </Text>
            <View style={{width:"100%",flex:1,justifyContent:'center',alignItems:'center',marginTop:15}}>
              <NumericInput
                onChange={value => {}}
                minValue={0}
                totalWidth={300}
                totalHeight={50}
                iconSize={30}
                step={1}
                valueType='integer'
                rounded
                textColor='grey'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='#3498db'
                leftButtonBackgroundColor='#879dc1'
                style={{justifyContent:'center',alignItems:'center'}}
                />
              <Button primary block style={{marginTop:15,borderRadius:10,height:60}}><Text> Make my donation ! </Text></Button>
            </View>

          </Body>
        </CardItem>
      </Card>
    </Content>
</ScrollView>
);

ProjectContent.defaultProps = {
  data:[
    {title: 'Event 1', description: 'Event 1 Description',extraInfo:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"},
    {title: 'Event 2', description: 'Event 2 Description',extraInfo:"of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised"},
    {title: 'Event 3', description: 'Event 3 Description',extraInfo:'Additional Info'},
    {title: 'Event 4', description: 'Event 4 Description',extraInfo:'Additional Info'},
    {title: 'Event 5', description: 'Event 5 Description',extraInfo:'Additional Info'},
    {title: 'Event 6', description: 'Event 5 Description',extraInfo:'Additional Info'}
  ],
  overlayShown:false,
  toggleOverlay:()=>{},
  updateOverlayContent: ()=>{}
}
