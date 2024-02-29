import {Headerstyle} from "./style"
import React from "react"
import {Text, View, Image} from "react-native"

export function Header(){
    return(
            <View style={Headerstyle.hs}>
                <Image
                    source={require('../../assets/logo1.png')}
                    style={Headerstyle.logo}
                />
            </View>
    )
}