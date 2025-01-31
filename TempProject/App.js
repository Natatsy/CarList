import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/pages/HomePage';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProtectedContent from './screens/ProtectedContent';

const Stack = createStackNavigator();

const App = () => {
  const handleSettingsPress = () => {
    console.log('Settings Pressed');
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Header title="Cars App" onSettingsPress={handleSettingsPress} />

        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Protected" component={ProtectedContent} />
        </Stack.Navigator>

        <Footer />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default App;
