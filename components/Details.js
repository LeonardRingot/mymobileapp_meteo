import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, Image  } from 'react-native';
import {isSameDay} from 'date-fns'
export default function Details({data}){
    const [detailsweather, setDetailsWeather] = useState(null)
    useEffect(()=> {
        
     const detailsW = data.list.filter(forecast => {
        const today = new Date().getTime() + Math.abs(data.city.timezone * 1000)
        const forecastDate = new Date(forecast.dt * 1000)
            return isSameDay(today, forecastDate)
        })
        setDetailsWeather(detailsW[0])
    }, [data])
    return (
        <>
        {/* <View style={styles.containerleft}>
        
        <Text style={styles.wind}>{Math.round(detailsweather?.wind.speed)} km/h</Text> 
        <Text style={{alignSelf: 'flex-end'}}>{Math.round(detailsweather?.main.humidity)} % Humidité</Text>
        </View> */}
        <View style={{flex: 1, flexDirection: 'row'}}>
  <View style={{flex: 1}}>
  <Text style={styles.wind}>{Math.round(detailsweather?.wind.speed)} km/h</Text> 
  </View>
  <View style={{flex: 1}}>
  <Text style={styles.wind} >{Math.round(detailsweather?.main.humidity)} % Humidité</Text>
  
  </View>
  <View style={{flex: 1}}>
  <Text style={styles.wind} >{Math.round(detailsweather?.main.rain)} % risque pluie</Text>
  
  </View>
</View>
        
        
            
        
        

        </>
    )
}
const COLOR = "#282D3C"
const styles = StyleSheet.create({
    containerleft:{
    
    },
    city:{
        fontSize:36,
        fontWeight:"500",
        color: COLOR
    }, 
    today:{
        fontSize:24,
        fontWeight:"300",
        color: COLOR

    }, 
    image: {width:150, height:150, marginVertical:20},
    temp:{
        fontSize:80,
        fontWeight:"bold",
        color: COLOR,
    },
    description:{
        fontSize:24,
        fontWeight:"bold",
        color: COLOR

    },
    wind:{
        fontSize:16,
        fontWeight:"bold",
        color: COLOR
        

    }
    ,
    humid:{
        fontSize:24,
        fontWeight:"bold",
        color: COLOR

    }

})