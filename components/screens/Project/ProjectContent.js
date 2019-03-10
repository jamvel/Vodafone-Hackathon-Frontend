import React from "react";
import { Container, Grid, Text, Card, CardItem, Content, Body, StyleSheet, Icon, Button} from "native-base";
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
              {props.description[props.id]}
            </Text>
          </Body>
        </CardItem>
      </Card>
      <Text style={{fontSize:32,fontWeight:"bold",marginLeft:10,marginTop:10}}>Our Journey <Icon name='book' style={{marginRight:7,color:"#3498db",fontSize:36}}/></Text>
        <Timeline
          data={props.data[props.id]}
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
  id: 0,
  description:["As an NGO we have been experiencing several costs and cannot afford to pay for social workers to work with us. Social help would be greatly appreciated from anyone that can lend a hand",
               "Our current driver has a health issue which needs imminent attention. We require a driver for a limited amount of time to drive our residents to where they need to go",
               "The needs of this NGO outweigh the resources we currently have available. Therefore we have decided to expand our premesis and require physically abled persons to help us carry our furniture",
               "We are a small voluntary organisation who have a hard time making ends meet due to the vast amount of cases we get each week. We require energetic individuals who are willing to take care of our residents.",
               "During last week's storm our facilities experienced a lot of strucutral damange. We therefore require experienced individuals who can help us carry out maintenance throughout the complex.",
               "A month ago I had a bad experience where I ended up being the victim of an unfortunate accident. Unfortunately this experience has left me paralysed for most of my body. I therefore require an electronic wheelchair which costs too much for me to pay",
               "Our child has been suffering from ABC syndrome for the past year. His condition has drained our funds but we refuse to give up on him. The trip to London may be a life changing moment for us all and therefore we need your help in paying the expenses",
               "I just got out of prison and have started a new life. However, I am homeless and need help getting on my feet. Kindly help me find an apartment from where I can get my life back on track.",
               "Buy the required medicine which would keeping me going in my battle against XYZ",
               "Throughout my early days I was addicted to gambling and consequently lost most of my life earnings. I need a small financial sponsorship to pay off some outstanding loans and get back on my feet.",
               "Back in 2016 we had an accident where my entire house, along with my belongings burned to the gorund. Unfortunately, I was not insured and lost everything in the fire. I have been living on the streets for the past 2 months and would like to get back to the life I used to live"],
  data:[[
    {title: 'Help with social care', description: 'You would be assisting Dr. Josephine Muscat throughout her visits',extraInfo:"Carer degree is ideal"},
    {title: 'Help with cleaning and food preparation', description: 'We would clean our appartments and cook for all our residents',extraInfo:"No particular skill is required"}
  ],[
    {title: 'Driving us in the morning', description: 'We would require a driver to take us to church in the morning and take us back to the complex',extraInfo:"Bus driving license required"},
    {title: 'Driving us in the afternoon', description: 'We would require a driver to take us to the park during the afternoon for some fresh air',extraInfo:"Bus driving license required"},
    {title: 'Driving us in the evening', description: 'We would require a driver to take all our occupants back home in the evening',extraInfo:'Bus driving license required'}
  ], [
    {title: 'Carry furniture', description: 'People should ideally indicate the time they would be able to attend',extraInfo:"Ideally men in physical peak condition"},
    {title: 'Keep company to the residents', description: 'While we take care of logistics we will be requiring a group of people to keep our residents company',extraInfo:"Patient individuals who love being around jolly people"},
    {title: 'Move furniture', description: 'Movers with spacious vans required',extraInfo:'A small payment may be provided for the journey'}
  ], [
    {title: 'Normal Carer', description: 'We require a carer with no experience or expertise to assist us in day to day needs',extraInfo:"Applicants are not expected to take care of individuals by themselves"},
    {title: 'professional Carer', description: 'We require a professional to look after more critical individuals',extraInfo:"Applicants may be required to take care of certain individuals alone"}
  ], [
    {title: 'Painting', description: 'Looking for an experienced house painter and decorater to redo our interior',extraInfo:"Some enumeration may be provided"},
    {title: 'Plumbing', description: 'Looking for a plumber to carry out an inspection on all of our facilities',extraInfo:"Some enumeration may be provided"},
    {title: 'Tile Laying', description: 'Some tilings have come undone due to the flooding we experienced. Therefore we require a tiler to redo the entire basement',extraInfo:'Some enumeration may be provided'},
    {title: 'Cleaning', description: 'Due to the work constantly being carried out we need to clean after the work is complete. Help would be greatly appreciated!',extraInfo:'Ideally voluntary'}
  ],[
    {"title": "Starting Point", "description": "Wheelchair model analysis","extraInfo":"Total: Euros 1000"},
    {"title": "Buy Wheelchair", "description": "Buying Wheelchair from Wheelchair Ltd.","extraInfo":"I would be very grateful when this is obtained as I would gain my independence again."}
  ], [
    {"title": "Starting Point", "description": "We can't make it on our own and need financial aid","extraInfo":"Total: Euros 1650"},
    {"title": "Medical Expenses", "description": "The expenses are way to expensive for us to cover alone. The MCCF has supplied us with enough funds to cover 75% of it all and need help to get the remaining 25%","extraInfo":"Euros 1000"},
    {"title": "Buy air passage", "description": "We are using a low cost airline.","extraInfo":"Euros 150"},
    {"title": "Pay for accomodation", "description": "Accomodation is covered by MFCC. However, we need to spend 2 days travelling to get to the apartments","extraInfo":"Euros 300"},
    {"title": "Daily Expenses", "description": "Utilities and food","extraInfo":"Euros 200"}
  ], [
    {"title": "Starting Point", "description": "I need help to pay rent while I get back on my feet","extraInfo":"Total: Euros 1000"},
    {"title": "Place to stay until place is found", "description": "I will be needing a location to stay in until i find a more permanent location","extraInfo":"I can help out throughout the apartment"},
    {"title": "Pay Month 1", "description": "I should get a job by this time","extraInfo":"-"},
    {"title": "Pay Month 2", "description": "I should be able to sustain myself after this stage","extraInfo":"Thank You!"}
  ], [
    {"title": "Starting Point", "description": "Given my condition I cannot work to get money for my medications, and the government only covers so much","extraInfo":"Total: Euros 1000"},
    {"title": "Buy Blood Medicine", "description": "Buy medicine from the local pharmacist","extraInfo":"Euros 250"},
    {"title": "Buy Lung Medicine", "description": "Order the medicine from abroad","extraInfo":"Euros 750"}
  ], [
    {"title": "Starting Point", "description": "Currently I am in dier need of some money to pay off this month's credit","extraInfo":"Euros 200"},
    {"title": "Pay Debtors", "description": "Once debtors are paid I will be free from my past","extraInfo":"Thank you for giving me a second chance at life!"}
  ],[
    {"title": "Find an appartment", "description": "Currently I am living on the streets and would like to find somewhere to live in order to clean myself up.","extraInfo":"Euros 200"},
    {"title": "Find a job", "description": "Apart from my apartment I also lost my job since I wasn't able to perform like I used to after the incident","extraInfo":"I am skilled and highly motivated"},
    {"title": "Become independent again", "description": "My goal is to once more become the independent man I used to be","extraInfo":"-"},
    {"title": "[Blog Post]", "description": "I would like to thank all of you who believed in me and invested their time and money to get me a little appartment and a steady job. I would like you to know that I am back on my feet and looking forward to life's new challenges","extraInfo":"Thank You!"}
  ]],
  overlayShown:false,
  toggleOverlay:()=>{},
  updateOverlayContent: ()=>{}
}
