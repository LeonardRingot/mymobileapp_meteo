import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, Image, ScrollView } from 'react-native';
import data from "./Forecasts"
import {isSameDay} from 'date-fns'
import { useRoute } from '@react-navigation/native';
const getIcon = (icon)=> `http://openweathermap.org/img/wn/${icon}@4x.png`

export default function ButtonForecast({data}){
   
   const route = useRoute();
   const [buttonforecasts, setButtonForecasts] = useState({
    lat:route.params.data.city
    
})
    console.log(buttonforecasts.lat)
    // useEffect(()=> {
        
    //     const nextW = route.params.data.list.filter(forecast => {
    //        const next = new Date().getTime() + Math.abs(route.params.data.city.timezone * 1000)
    //        const forecastNextDate = new Date(forecast.dt * 1000)
    //            return isSameDay(next, forecastNextDate)
    //        })
    //        setButtonForecasts(nextW[0])
    //    }, [route.params.data.city])

    return (
        <>
            <View style={styles.container}>
            
            <Text style={styles.city}>{buttonforecasts?.lat}</Text>
             <Text style={styles.proch}>Prochainement....</Text>
              
            <Text>DLKZLKDE</Text>
            </View>
        </>
    )
}
    const COLOR = "#2F4F4F"
const styles = StyleSheet.create({
    container:{
        marginTop:60,
        alignItems:"center",
        height:"65%"
    },
    city:{
        fontSize:36,
        fontWeight:"500",
        color: COLOR
    }, 
    proch:{
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
        fontSize:24,
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