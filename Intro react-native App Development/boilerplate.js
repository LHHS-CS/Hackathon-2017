import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, Image } from 'react-native';
//append your imports here

export default class App extends Component {
  render() {
    return (
     <View style={styles.container}>
          //you write your code in here!
          <Text style={styles.text}>
          Hello World
          </Text>
     </View>
    );
  }
}

// the stylesheets
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text:{
        color: 'black',
        backgroundColor: 'whitesmoke'
    },
  }
)
