import React from "react";
import { Container, Content,Text , Card, CardItem, Body} from "native-base";
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default CardComponent = (props) => (
  <TouchableOpacity key={props.id} onPress={() => props.doAction(props.id)}>
    <Card
      key={props.id}
      style={{marginTop:8,height:"auto",paddingTop:10,paddingBottom:10}}
    >
      <CardItem header bordered>
        <Body>
          <Text style={{fontWeight:"bold"}}>
             {props.title}
          </Text>
        </Body>
        <Text style={{fontSize:12}}>{props.date}</Text>
      </CardItem>
      <CardItem>
        <Text>{props.text}</Text>
      </CardItem>
    </Card>
  </TouchableOpacity>
);

CardComponent.defaultProps = {
  title:"Card Title",
  date:"--",
  text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  doAction:()=>{}
}
