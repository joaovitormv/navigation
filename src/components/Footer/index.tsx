import {Footerstyle} from "./style"
import React from "react"
import {View, Image, TouchableOpacity} from "react-native"
import { useNavigation } from '@react-navigation/native'

export function Footer(){
    const Pg2 = () =>{
        useNavigation().navigate('Tela2'); 
    }

    return(
            <View style={Footerstyle.fs}>
                <TouchableOpacity onPress={Pg2}>   
                <Image
                    source={require('../../assets/disco.png')}
                    style={Footerstyle.img}
                />
                </TouchableOpacity>
                <Image
                    source={require('../../assets/home.png')}
                    style={Footerstyle.img}
                />
                <Image
                    source={require('../../assets/banda 4.png')}
                    style={Footerstyle.img}
                />
                
            </View>
    )
}