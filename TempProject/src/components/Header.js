// src/components/Header.js
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = ({ title, onSettingsPress }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onSettingsPress}>
        <Icon name="settings" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#4CAF50", // Example background color
    padding: 15,
    flexDirection: "row", // Align title and settings button horizontally
    justifyContent: "space-between", // Space out the title and settings button
    alignItems: "center", // Vertically align items in the center
  },
  title: {
    fontSize: 20,
    color: "#fff", // White text color
  },
  settings: {
    color: "#fff", // White text color
    fontSize: 16,
  },
});

export default Header;
