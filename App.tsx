import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "./src/components/Header"
import { Footer } from "./src/components/Footer"
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import { Tela2 } from './src/screens/tela2'; 

const Stack = createStackNavigator();

const A = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela2" component={Tela2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  

  return (
    
    <View style={styles.container}>
      <Header></Header>
      <StatusBar style="auto" />
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
