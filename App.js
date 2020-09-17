import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import Home from './screens/Home/Home'
import HomeStack from './routes/HomeStack'
import 'react-native-gesture-handler';
import DummyNavigation from './DummySourceCode/DummyNavigation'

// React Navigation Version 5:
//https://www.youtube.com/watch?v=nQVCkqvU1uE

export default function App() {
  return (
    <View style={styles.container}>
      <DummyNavigation />     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
