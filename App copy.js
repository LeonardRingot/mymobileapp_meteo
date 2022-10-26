import { StatusBar } from 'expo-status-bar';
import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput  } from 'react-native';
import * as Location from 'expo-location';

export default function App() {
  // const [allData, setAllData]= useState([]);
  // const fecthdatameteo = async()=>{
    /*
 fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.6688&lon=1.8348&appid=897d4d82ee64c739c6f99f2d2dc37c0d').then((response) => response.json())
 .then((data) => console.log(data['main']['temp']));
   
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <>
    <View style={styles.container}>
      <Text>BZZZZ - Léonard Ringot </Text>
      
      <TextInput style={styles.input} onChangeText={onChangeText} value={text} />
      <StatusBar style="auto" />
    </View>

<Button
onPress={() => Alert.alert('Simple Button pressed')}
title="Learn More"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/>
    </>  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
*/