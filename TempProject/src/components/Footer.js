// src/components/Footer.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>
        &copy; 2025 Your Website. All rights reserved.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#333", // Dark background
    padding: 15,
    alignItems: "center", // Center content horizontally
    justifyContent: "center", // Center content vertically
    position: "absolute", // Fixed at the bottom of the screen
    bottom: 0,
    width: "100%", // Take up full width
  },
  text: {
    color: "#fff", // White text color
    fontSize: 14,
  },
});

export default Footer;
