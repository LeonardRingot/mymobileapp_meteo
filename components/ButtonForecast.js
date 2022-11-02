import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ActivityIndicator, Image, ScrollView, BackHandler } from 'react-native';
import { useNavigation, NavigationContainer, useRoute } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import {isSameDay} from 'date-fns'
import { LinearGradient } from 'expo-linear-gradient';
const getIcon = (icon)=> `http://openweathermap.org/img/wn/${icon}@2x.png`

export default function ButtonForecast({data}){
    
    const navigation = useNavigation();
    const route = useRoute([]);
    const GoBack = () => {
        navigation.navigate('home',data= {data});
    }

   const [buttonforecasts, setButtonForecasts] = useState({
    temp:route.params.data.list[0].main.temp,
    description:route.params.data.list[0].weather[0].description,
    windspeed:route.params.data.list[0].wind.speed,
    humidity:route.params.data.list[0].main.humidity,
    chanceofrain:route.params.data.list[0].rain,
    image:route.params.data.list[0].weather[0].icon
    
})
    useEffect(()=> {
        navigation.setOptions({ headerShown: true,
            headerLeft: (props) => (
                <HeaderBackButton
                    {...props}
                    onPress={() => {
                        GoBack();
                    }}
                />
            )});
        const nextW = route.params.data.list.filter(forecast => {
           const next = new Date().getTime() + Math.abs(route.params.data.city.timezone * 1000)
           const forecastNextDate = new Date(forecast.dt * 1000)
               return isSameDay(next, forecastNextDate)
           })
       }, [route.params.data.city])

    return (
        <>
             <LinearGradient colors={['#0568b8', '#00d4ff']} style={styles.container}>
             <Text style={styles.proch}>Prochainement....</Text>
            <Text style={styles.city}>{buttonforecasts?.description}</Text>
            <Text style={styles.city}>{Math.round(buttonforecasts?.temp)}°C</Text>


    <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flex: 1}}>
        <Image  source ={{uri : getIcon(buttonforecasts?.image)}}
                    style={styles.image}/> 
        </View>
        <View style={{flex: 1}}>

        <Text style={styles.wind} >{Math.round(buttonforecasts?.humidity)} % Humidité</Text>
        
        </View>
</View> 
            


             <View style={{flex: 1, flexDirection: 'row'}}>
  <View style={{flex: 1}}>
  <Text style={styles.wind}>{Math.round(buttonforecasts?.windspeed)} km/h</Text> 
  </View>
  <View style={{flex: 1}}>
  <Text style={styles.wind} >{Math.round(buttonforecasts?.humidity)} % Humidité</Text>
  
  </View>
  <View style={{flex: 1}}>
  <Text style={styles.wind} >{Math.round(buttonforecasts?.chanceofrain)} % risque pluie</Text>
  
  </View>
</View> 
            </LinearGradient>
        </>
    )
}
    const COLOR = "#2F4F4F"
const styles = StyleSheet.create({
    container:{
        marginTop:0,
        alignItems:"center",
        height:"45%",
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor:"#9BB7D4"
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