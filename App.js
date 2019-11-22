/*This is an React Native Example to Take Screenshot Programmatically */
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Button, Platform, ScrollView } from 'react-native';
import { captureScreen } from "react-native-view-shot";
export default class App extends Component {
  constructor(){
    super();
    this.state={
      imageURI : ''
    }
  }
  takeScreenShot=()=>{
    captureScreen({
      format: "jpg",
      quality: 0.8
    })
    .then(
      uri => this.setState({ imageURI : uri }),
      error => console.error("Oops, Something Went Wrong", error)
    );    
      console.log(this.state.imageURI);
  }
  render() {
    return (
      <View style={styles.MainContainer}>
        <ScrollView>
          <Text style={{fontSize:20}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Image 
              source={{uri : this.state.imageURI}} 
              style={{width: 200, height: 300, resizeMode: 'contain', marginTop: 5}} />
          <Button title="Take Screenshot" onPress={this.takeScreenShot} />
          </ScrollView>
          
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  }
});