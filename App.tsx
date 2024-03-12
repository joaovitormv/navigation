import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "./src/components/Header"
import { Footer } from "./src/components/Footer"
import { Tela1 } from "./src/screens/tela1"
import { Tela2 } from './src/screens/tela2';
import { Dispatch, SetStateAction, useState } from 'react';

export interface a {
  setPage : Dispatch<SetStateAction<number>>
}

export default function App() {
  const[Page, setPage] = useState(1)
  
  if (Page == 1){
    return (
      <View style={styles.container}>
        <Header></Header>
        <Tela1></Tela1>
        <Footer setPage={setPage}></Footer> 
      </View>
  );
  }else if(Page == 2){
    return (
      <View style={styles.container}>  
        <Header></Header>   
        <Tela2></Tela2>
        <Footer setPage={setPage}></Footer> 
      </View>
  );
  }else{
    return (
      <View style={styles.container}>
        <Header></Header>
        <Text>em breve</Text>
        <Footer setPage={setPage}></Footer> 
      </View>
  );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


