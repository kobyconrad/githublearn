import React from "react";
import { StyleSheet, Text, View } from "react-native";
import uuidv4 from "uuidv4";

const BasicComponent = props => {
  const MY_KEY = uuidv4();

  return (
    <View key={MY_KEY} style={styles.componentContainer}>
      <Text style={styles.fontStyles}>Basic Component</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  componentContainer: {
    width: 250,
    height: 75,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    margin: 15
  },
  fontStyles: {
    color: "white"
  }
});

export default BasicComponent;
