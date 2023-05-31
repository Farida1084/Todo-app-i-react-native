import React, { useEffect } from "react";
import { Button, View, Text } from "react-native";

function DetailsScreen({ navigation, route }) {
  //ny inlägg
  const { title, id } = route.params;

  // useEffect(() => {
  //   navigation.setOptions({ title: title }, [route]);
  // });
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{title}</Text>
      <Button
        title="Klar!"
        onPress={() => {
          navigation.navigate("Home", { deleteId: id });
        }}
      />
    </View>
  );
}

export default DetailsScreen;
