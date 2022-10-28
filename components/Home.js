import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator  } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';
import CurrentWeather from './CurrentWeather';
import Forecasts from './Forecasts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Home() {
  const [text, onChangeText] = useState('Useless Text');
  const [loading, setLoading] = useState(true)
  const [data, setData]= useState(null);
    const API_URL= (lat, lon)=> `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=9e5e34c9b8b6ccf6d3c269305d55891a&lang=fr&units=metric`
// On recupere les coordonnes de l'utilisateur
  useEffect (()=>{
    const getCoordinates = async ()=>{

     const {status}= await Location.requestForegroundPermissionsAsync()
     if(status !== "granted")
     {
      return
     }
     const userLocation = await Location.getCurrentPositionAsync()
     getWeather(userLocation)
    }
    getCoordinates()
  }, [])

  const getWeather = async (location)=>{
    try{
      const response = await axios.get(API_URL(location.coords.latitude, location.coords.longitude))
      setData(response.data)
      setLoading(false)
    }catch(e) {
      console.log("erreur dans getweather")
    }
    
  }
  if (loading)
  {
    return <View style={styles.container} >
    <ActivityIndicator/>
    </View>
  }

  return (
    <>
    <View style={styles.container}>
     <CurrentWeather data ={data}></CurrentWeather>
       <Forecasts data= {data}></Forecasts>
       
    </View>
    </>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88B04B',
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