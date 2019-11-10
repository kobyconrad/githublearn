import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import uuidv4 from "uuidv4";
import BasicButton from "./components/BasicButton";
import BasicComponent from "./components/BasicComponent";

export default function App() {
  const [componentKey, setComponentKey] = useState([]);
  const [componentState, setComponentState] = useState();

  const MY_KEY = uuidv4();
  const components = componentKey.map(key => <BasicComponent key={key.id} />);

  return (
    <View style={styles.container}>
      <BasicButton
        onPress={() => {
          setComponentKey([componentKey, { id: MY_KEY }]);
          setComponentState([componentState, components]);

          console.log(componentKey);
          console.log(componentState);
        }}
        buttonTitle="Create Component"
      />
      <View>{componentState}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
