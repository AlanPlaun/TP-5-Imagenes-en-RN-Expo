import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from './Componentes/Card';

 export default function App() {
  return (
    <View style={styles.container}>
      <Image
          style={styles.logo}
          source={require("./imgs/central_perk_logo.jpeg")}
        />
      <Text style={styles.texto}>Proba nuestro cafe</Text>
      <Card/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 400,
    height: 150,
    marginBottom: 15
  },
  texto:{
    fontWeight:"bold"
  }
});
