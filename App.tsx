import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Main from './src/pages/Main';
import { ThemeProvider } from './src/context/ThemeContext';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'PinyonScript': require('./assets/fonts/PinyonScript-Regular.ttf'),
  });
  
  if (!fontsLoaded) {
    return null; 
  }

  return (
    <View style={styles.container}>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
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
