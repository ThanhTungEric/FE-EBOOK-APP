import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OpenAppScreen from './Screens/OpenAppScreen';
import HomeScreen from './Screens/HomeScreen';

import AddToCart from './Screens/AddToCart';
import SelectChaper from './Screens/SelectChaper';
import Read from './Screens/Read';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OpenApp" component={OpenAppScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddToCart" component={AddToCart} options={{ headerShown: false }} />
        <Stack.Screen name="Read" component={Read} options={{ headerShown: false }} />
        <Stack.Screen name="SelectChaper" component={SelectChaper} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
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
