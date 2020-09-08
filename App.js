import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as Progress from 'react-native-progress';
import Home from './screens/Home/Home'
import HomeStack from './routes/HomeStack'
import 'react-native-gesture-handler';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeStack />     
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
