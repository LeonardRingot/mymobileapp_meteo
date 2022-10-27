import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, Image  } from 'react-native';
import {isSameDay} from 'date-fns'
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Details from"./Details"

const getIcon = (icon)=> `http://openweathermap.org/img/wn/${icon}@4x.png`
export default function CurrentWeather({data}){
    const [currentWeather, setCurrentWeather] = useState(null)
    useEffect(()=> {
        
     const currentW = data.list.filter(forecast => {
        const today = new Date().getTime() + Math.abs(data.city.timezone * 1000)
        const forecastDate = new Date(forecast.dt * 1000)
            return isSameDay(today, forecastDate)
        })
        setCurrentWeather(currentW[0])
    }, [data])
    return (
        <>
        <View style={styles.container}>

       
            <Text style={styles.city}>{data?.city?.name}</Text>
            <Text style={styles.today}>Aujourd'hui</Text>

            <Image  source ={{uri : getIcon(currentWeather?.weather[0].icon)}}
            style={styles.image}/>

            <Text style={styles.temp}>{Math.round(currentWeather?.main.temp)} °C</Text>
            <Text style={styles.description}>{currentWeather?.weather[0].description}</Text> 
             
            {/* <Text style={styles.wind}>{Math.round(currentWeather?.wind.speed)} km/h</Text> 
            <Text style={styles.humid}>{Math.round(currentWeather?.main.humidity)} % Humidité</Text>  */}
            <Details data ={data} ></Details>
            </View>
            
            
        </>
    )
}
const COLOR = "#282D3C"
const styles = StyleSheet.create({
    container:{
        marginTop:0,
        alignItems:"center",
        height:"65%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor:"#9BB7D4"
    },
    city:{
        marginTop:10,
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