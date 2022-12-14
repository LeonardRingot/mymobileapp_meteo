import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, Image, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {format} from 'date-fns'
import Weather from './Weather';
import ButtonForecast from './ButtonForecast'
import {da, fr} from 'date-fns/locale'
import CurrentWeather from './CurrentWeather';

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
    const curr_date = new Date();
    curr_date.setDate(curr_date.getDate() + 1);
    curr_date.setHours(0, 0, 0, 0, 0);
    const target_dt = curr_date.valueOf() / 1000;
    const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    useEffect (()=>{
      let forecastsData = data.list.map(f => {
        let curr_dt = f.dt;
        const dt = new Date(curr_dt * 1000)
        return ({
            data:dt,
            hour:dt.getHours(),
            temp:Math.round( f.main.temp),
            icon: f.weather[0].icon,
            name: format(dt, "EEEE", {locale:fr}),
            date: f.dt_txt,
            timestamp: curr_dt
        })
      });

      forecastsData = forecastsData.filter(val => {
        return val.timestamp < target_dt
      });
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
      // Grouper les elementrs pas jours 
      setForecasts(newForecastsData)
    }, [data])

    
    
    return (
      <>
      
 <Button  style={styles.button} onPress={() => navigation.navigate('buttonForecast',data= {data})} title="Previsions 7 jours" > <ButtonForecast  ></ButtonForecast></Button>
     
     
      
         <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={styles.scroll}
         >
           
            {forecasts.map(f=>(
                <View key={f.data.timestamp}>
                     <Text key={f.data.timestamp} style={styles.day}>{f.day.toUpperCase()}</Text>
                     
                    <View key={f.data.timestamp} style={styles.container}>
                   
                    {f.data.map(w=> 
                    <TouchableOpacity key={w.timestamp} ><Weather data= {data} forecast = {w} key={w.timestamp}></Weather></TouchableOpacity>
                      
                    )}
                    
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
        color:"#2F4F4F",
        fontWeight:"bold",
        marginBottom:10,
        marginLeft: 5
    },
    container:{
        flexDirection:"row",
        marginLeft:5,
        marginRight:15
    },
    button:
    {
      alignItems:'right',
      width:100,
      color:"red"
    }
})

