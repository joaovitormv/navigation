import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "./src/components/Header"

import { Tela1 } from "./src/screens/tela1"
import { Tela2 } from './src/screens/tela2';
import { Dispatch, SetStateAction, useState } from 'react';
import Navigation from './src/navigation';


export default function App() {
  return(
    <Navigation />
  )
 
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


