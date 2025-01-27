import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HomePage from './src/pages/HomePage';
const App = () => {
  const handleSettingsPress = () => {
    // Implement your settings button press action here
    console.log('Settings Pressed');
  };

  return (
    <View style={styles.container}>
      <Header title="Cars App" onSettingsPress={handleSettingsPress} />
      <ScrollView contentContainerStyle={styles.content}>
        <HomePage />
        {/* Other pages or components */}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the layout fills the entire screen
    backgroundColor: '#f5f5f5', // Light background color for the app
  },
  content: {
    paddingBottom: 60, // Adjust to give space for the footer at the bottom
  },
});

export default App;
