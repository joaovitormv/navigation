import {Footerstyle} from "./style"
import React from "react"
import {View, Image, TouchableOpacity} from "react-native"
import {a} from "../../../App"

export function Footer({setPage}:a){

    return(
            <View style={Footerstyle.fs}>
                <TouchableOpacity onPress={() => setPage(2)}>  
                <Image
                    source={require('../../assets/disco.png')}
                    style={Footerstyle.img}
                />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPage(1)}>
                 <Image
                        source={require('../../assets/home.png')}
                        style={Footerstyle.img}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setPage(3)}>
                    <Image
                        source={require('../../assets/banda 4.png')}
                        style={Footerstyle.img}
                    />
                </TouchableOpacity>

                
            </View>
    )
}