import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BasicButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonContainer}>
      <Text style={styles.fontStyles}>{props.buttonTitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: 150,
    height: 50,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  fontStyles: {
    color: "white"
  }
});

export default BasicButton;
