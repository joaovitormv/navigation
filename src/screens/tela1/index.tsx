import React from "react"
import {View, Image, Text } from "react-native"
import { Pg1style } from "./style"

export function Tela1 (){
    return (
        <View>
            <Image
                source={require("../../assets/gunsfoto.png")}
                style={Pg1style.img}
            />
            <Text style={Pg1style.txt}>
            Nesse  app, desenvolvido por João Vitor para um trabalho de Aplicaçôes Móveis, você vai encontrar diversas informações relacionadas a uma das maiores 
            (e melhores) bandas de rock de todos os tempos. Há curiosidades sobre os albúns, bem como biografias dos membros.
            </Text>
            <Image
                source={require("../../assets/slash.png")}
                style={Pg1style.img2}
            />
        </View>
      
    )
    
  
}