import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
//append your imports here

export default class App extends Component {
  render() {
    return (
     <View style={styles.container}>
          <Text>
          Start writing code here!
          </Text>
     </View>
    );
  }
}
// create your stylesheets
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loginContainer:{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100,
        width: 100,
        height: 100
    }
  }
  )
