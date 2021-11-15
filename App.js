import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat.ttf'),
    BlackJack: require('./assets/fonts/blackjack.otf'),
    FFF : require('./assets/fonts/FFF_Tusj.ttf'),
    GreatVibes : require('./assets/fonts/GreatVibes-Regular.otf'),
    OpenSans :require('./assets/fonts/OpenSans-Light.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Montserrat', fontSize: 30 }}>Hello Sconti</Text>
      <Text style={{ fontFamily: 'BlackJack', fontSize: 30 }}>Hello Sconti</Text>
      <Text style={{ fontFamily: 'FFF', fontSize: 30 }}>Hello Sconti</Text>
      <Text style={{ fontFamily: 'GreatVibes', fontSize: 30 }}>Hello Sconti</Text>
      <Text style={{ fontFamily: 'OpenSans', fontSize: 30 }}>Hello Sconti</Text>
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
