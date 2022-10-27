import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, Image, ScrollView } from 'react-native';

import {isSameDay} from 'date-fns'
const getIcon = (icon)=> `http://openweathermap.org/img/wn/${icon}@4x.png`
export default function ButtonForecast(data){
    const [buttonforecasts, setButtonForecasts] = useState([])
    // useEffect(()=> {
        
    //     const NextW = data.list.filter(forecast => {
    //        const Next = new Date().getTime() + Math.abs(data.city.timezone * 1000)
    //        const forecastNextDate = new Date(forecast.dt * 1000)
    //            return isSameDay(Next, forecastNextDate)
    //        })
    //        setButtonForecasts(NextW[0])
    //    }, [data])

    return (
        <>
            {/* <View style={styles.container}></View>
            <Text style={styles.city}>{data?.city?.name}</Text>
             <Text style={styles.proch}>Prochainement....</Text>
             <Image  source ={{uri : getIcon(NextW?.weather[0].icon)}}
            style={styles.image}/> */}
            <Text>DLKZLKDE</Text>

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