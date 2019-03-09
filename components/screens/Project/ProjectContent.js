import React from "react";
import { Container, Grid, Text, Card, CardItem, Content, Body} from "native-base";
import { View, ScrollView } from "react-native";
import Timeline from 'react-native-timeline-listview';
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
      <Text style={{fontSize:32,fontWeight:"bold",marginLeft:10,marginTop:10}}>My Story</Text>
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
