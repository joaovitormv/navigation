import React from "react"
import { View, Image, FlatList } from "react-native"
import { Pg2style } from "./style"


export function Tela2() {
    const data = [
        require("../../assets/apetite.webp"),
        require("../../assets/lies.webp"),
        require("../../assets/use1.webp"),
        require("../../assets/use2.webp"),
        require("../../assets/incident.webp"),
        require("../../assets/chinese.webp")
    ];
    return (
        <View style={Pg2style.container}>
            <FlatList
                data={data}
                renderItem={({ item, index }) => (
                    <Image source={item} key={index} style={Pg2style.image} />
                )}
                numColumns={2}
            />
        </View>
    )
}