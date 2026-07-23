import { StatusBar } from 'expo-status-bar';
import { useFonts, Overpass_400Regular, Overpass_600SemiBold, Overpass_700Bold } from '@expo-google-fonts/overpass';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';
import Welcome from './src/screens/Welcome';

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Welcome />
    </ThemeProvider>
  );
}
