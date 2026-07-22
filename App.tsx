import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold } from '@expo-google-fonts/overpass';

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Aguardando carregamento da fonte
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Overpass_400Regular', fontSize: 18 }}>Projeto FindWeather Criado!</Text>
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
});
