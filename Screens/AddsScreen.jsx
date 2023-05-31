// export default function AddsScreen({ navigation, route }) {
//   const { setTodo } = route.params;

//   return (
//     <View></View>);
// }

import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function AddScreen({ navigation }) {
  const [text, onChangeText] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <Button
        style={styles.addButton}
        title="Add"
        onPress={() => {
          const todo = { text };

          navigation.navigate("Home", { todo });
        }}
      />
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
