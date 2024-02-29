import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from "./src/components/Header"



export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Header></Header>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header:{

  }
});
