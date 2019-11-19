
import React, {Component,useRef} from 'react';
import {Platform, StyleSheet, Text, View, Image, Button, ScrollView} from 'react-native';
import { captureRef, captureScreen ,ViewShot} from "react-native-view-shot";
import NewVd from './NewVd';
import cap from './cap'
                

export default class App extends Component {
constructor(){
super();
this.state={
    captureProcessisReady:false,
    myView:false,
    uri:"",
};
this.func=this.func.bind(this);
}
componentDidMount(){
}
result1=()=> {this.setState({captureProcessisReady:true});}

func = (uri) => {
    console.log('ADD item quantity with id: ', uri);
    this.setState({uri : uri, myView : true});
                };

    render() {
            return (
                <View style={styles.container}>
                    <Image
                  style = {{width : 100, height : 70, borderColor : '#0C00AF', borderWidth : 1}}
                  source = {{uri : this.state.uri}}
                  />
                <NewVd  func={this.func}/>
                <ScrollView style={styles.ScrollView}>
                <Text style={styles.Text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                        
                <Text style={styles.welcome}>Welcome to React Native!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Button onPress={()=>this.result1()} title="저장" />
                        <View>
                        {this.state.captureProcessisReady?( <NewVd func={this.func}/>):null}
                        </View>
                        <View>
                        {this.state.myView?( <Image source={{uri:this.state.item !== null?`${this.state.item}`:'https://picsum.photos/200'}} style={{width:100,height:100}} />):null}
                        </View>
                        </ScrollView>
                    </View>
                    );
                }
                }

const styles = StyleSheet.create({
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
Text: {
    fontSize: 42,
},
    ScrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
},
welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
},
instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
},
separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});