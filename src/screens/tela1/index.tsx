import React from "react"
import { View, Image, Text, TouchableOpacity } from "react-native"
import { Pg1style } from "./style"
import { MenuStackTypes } from "../../navigation/menuStack.navigation"


export function Tela1({ navigation }: MenuStackTypes) {
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
            <TouchableOpacity style={Pg1style.botao} onPress={() => navigation.push("Tela2")}>
                <Text style={Pg1style.txt}>Ir para tela 2</Text>
            </TouchableOpacity>
        </View>

    )


}