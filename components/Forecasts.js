import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {format} from 'date-fns'
import Weather from './Weather';
import ButtonForecast from './ButtonForecast'
import {da, fr} from 'date-fns/locale'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function Forecasts({data}){
    const [forecasts, setForecasts] = useState([])
    const navigation = useNavigation();
    useEffect (()=>{
      const forecastsData = data.list.map(f => {
        const dt = new Date (f.dt *1000)
        return ({
            data:dt,
            hour:dt.getHours(),
            temp:Math.round( f.main.temp),
            icon: f.weather[0].icon,
            name: format(dt, "EEEE", {locale:fr})
        })
      })
      let newForecastsData =forecastsData.map(forecast =>{
        return forecast.name
      }).filter((day, index, self)=>{
        return self.indexOf(day) === index
      }).map((day)=>{
        return {
            day, 
            data:forecastsData.filter((forecast)=>forecast.name === day)
        }
      })
        console.log(newForecastsData)
      // Grouper les elementrs pas jours 
      setForecasts(newForecastsData)
    }, [data])

    return (
      <>
         <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={styles.scroll}
         >
            {forecasts.map(f=>(
                <View >
                     <Text  style={styles.day}>{f.day.toUpperCase()}</Text>
                    <View  style={styles.container}>
                    {f.data.map(w=> <TouchableOpacity onPress={() => navigation.navigate('buttonForecast')} ><Weather forecast = {w}></Weather></TouchableOpacity>)}
                    </View>
                </View>
            ))}
         </ScrollView>
         
         </>
    )
   
}
const styles = StyleSheet.create({
    scroll:{
        width:"100%",
        height:"35%"
    },
    day:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:10,
        marginLeft: 5
    },
    container:{
        flexDirection:"row",
        marginLeft:5,
        marginRight:15
    }
})

